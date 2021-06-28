import { update, sideEffect, noUpdate, updateWithSideEffect } from 'react-use-side-effect-reducer';
import { produce } from 'immer';
import { createChart, createExportState, validateUnknownState, findAlbumIndexWithID, getAlbumID, identifiedAlbumIsPlaceholder, routeToHash, elementToDataURI, downloadURI, jsonToDataURI, fileToDataURI } from './utils.js';
export function createReducer(searcher) {
    return (state, action) => {
        var _a, _b, _c;
        switch (action.tag) {
            case 'PopRoute':
                return update({
                    ...state,
                    route: action.route
                });
            case 'PushRoute': {
                if (((_a = state.route) === null || _a === void 0 ? void 0 : _a.tag) === action.route.tag) {
                    return noUpdate;
                }
                return updateWithSideEffect({
                    ...state,
                    route: action.route
                }, () => {
                    const url = location.pathname + routeToHash(action.route);
                    if (action.replace) {
                        history.replaceState(null, '', url);
                    }
                    else {
                        history.pushState(null, '', url);
                    }
                });
            }
            case 'UpdateAPIKey':
                return update(produce(state, state => {
                    state.apiKey = action.apiKey;
                }));
            case 'UpdateActiveChart':
                return update(produce(state, state => {
                    state.activeChartIndex = action.index;
                    state.highlightedID = null;
                }));
            case 'PromptForNewChart':
                return sideEffect((dispatch, state) => {
                    var _a;
                    const activeChart = state.charts[state.activeChartIndex];
                    const name = (_a = prompt('Enter new chart name:', activeChart.name)) === null || _a === void 0 ? void 0 : _a.trim();
                    if (name === undefined || name.length === 0) {
                        return;
                    }
                    if (state.charts.some(chart => chart.name === name)) {
                        dispatch({ tag: 'ShowChartNameTakenMessage' });
                        return;
                    }
                    dispatch({ tag: 'AddNewChart', name });
                });
            case 'ShowChartNameTakenMessage':
                return sideEffect(() => alert('A chart with that name already exists'));
            case 'AddNewChart': {
                const chart = createChart(action.name);
                return update(produce(state, state => {
                    state.charts.push(chart);
                    state.activeChartIndex = state.charts.length - 1;
                    state.highlightedID = null;
                }));
            }
            case 'PromptToRenameActiveChart':
                return sideEffect((dispatch, state) => {
                    var _a;
                    const activeChart = state.charts[state.activeChartIndex];
                    const name = (_a = prompt('Enter new chart name:', activeChart.name)) === null || _a === void 0 ? void 0 : _a.trim();
                    if (name === undefined || name.length === 0) {
                        return;
                    }
                    for (let index = 0; index < state.charts.length; index++) {
                        const chart = state.charts[index];
                        if (chart.name === name) {
                            if (index !== state.activeChartIndex) {
                                dispatch({ tag: 'ShowChartNameTakenMessage' });
                            }
                            return;
                        }
                    }
                    dispatch({ tag: 'RenameActiveChart', name });
                });
            case 'RenameActiveChart':
                return update(produce(state, state => {
                    state.charts[state.activeChartIndex].name = action.name;
                }));
            case 'PromptToDeleteActiveChart':
                return sideEffect(dispatch => {
                    if (confirm('Really delete active chart? This cannot be undone')) {
                        dispatch({ tag: 'DeleteActiveChart' });
                    }
                });
            case 'DeleteActiveChart': {
                if (state.charts.length === 1) {
                    return update(produce(state, state => {
                        state.charts = [createChart()];
                        state.activeChartIndex = 0;
                        state.highlightedID = null;
                    }));
                }
                return update(produce(state, state => {
                    state.charts.splice(state.activeChartIndex, 1);
                    state.activeChartIndex = state.activeChartIndex - 1 < 0
                        ? state.charts.length - 1
                        : state.activeChartIndex - 1;
                    state.highlightedID = null;
                }));
            }
            case 'MoveActiveChart': {
                if (state.charts.length === 1) {
                    return noUpdate;
                }
                if (action.direction === 'Up') {
                    if (state.activeChartIndex === 0) {
                        return noUpdate;
                    }
                    return update(produce(state, state => {
                        const temp = state.charts[state.activeChartIndex - 1];
                        state.charts[state.activeChartIndex - 1] = state.charts[state.activeChartIndex];
                        state.charts[state.activeChartIndex] = temp;
                        state.activeChartIndex--;
                    }));
                }
                if (state.activeChartIndex === state.charts.length - 1) {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    const temp = state.charts[state.activeChartIndex + 1];
                    state.charts[state.activeChartIndex + 1] = state.charts[state.activeChartIndex];
                    state.charts[state.activeChartIndex] = temp;
                    state.activeChartIndex++;
                }));
            }
            case 'LoadStateFile':
                return sideEffect(async (dispatch) => {
                    let parsed;
                    try {
                        const json = await action.file.text();
                        parsed = JSON.parse(json);
                    }
                    catch {
                        dispatch({ tag: 'ShowInvalidStateImportMessage' });
                        return;
                    }
                    const state = validateUnknownState(parsed);
                    if (state === null) {
                        dispatch({ tag: 'ShowInvalidStateImportMessage' });
                        return;
                    }
                    dispatch({ tag: 'LoadState', state });
                });
            case 'ShowInvalidStateImportMessage':
                return sideEffect(() => alert('Selected file is invalid'));
            case 'LoadState': {
                if (((_b = state.route) === null || _b === void 0 ? void 0 : _b.tag) !== 'Editor') {
                    return noUpdate;
                }
                return update({
                    ...action.state,
                    route: state.route
                });
            }
            case 'PromptToSaveState':
                return sideEffect((_dispatch, state) => {
                    const json = JSON.stringify(createExportState(state));
                    const uri = jsonToDataURI(json);
                    downloadURI(uri, 'state.json');
                });
            case 'CancelSearchRequest': {
                if (state.searchState.tag !== 'Loading') {
                    return noUpdate;
                }
                const controller = state.searchState.controller;
                return updateWithSideEffect(produce(state, state => {
                    state.searchState = {
                        tag: 'Waiting',
                        query: state.searchState.query
                    };
                }), () => controller.abort());
            }
            case 'SendSearchRequest': {
                if (state.searchState.tag === 'Loading'
                    || state.searchState.query.trim().length === 0) {
                    return noUpdate;
                }
                if (state.apiKey.trim().length === 0) {
                    return update(produce(state, state => {
                        state.searchState = {
                            tag: 'Error',
                            query: state.searchState.query,
                            message: 'Last.fm API key required'
                        };
                    }));
                }
                const controller = new AbortController();
                return updateWithSideEffect(produce(state, state => {
                    state.searchState = {
                        tag: 'Loading',
                        query: state.searchState.query,
                        controller
                    };
                }), async (dispatch, state) => {
                    const result = await searcher({
                        key: state.apiKey,
                        query: state.searchState.query,
                        signal: controller.signal
                    });
                    switch (result.tag) {
                        case 'Ok': {
                            dispatch({
                                tag: 'LoadState',
                                state: produce(state, state => {
                                    state.searchState = {
                                        tag: 'Complete',
                                        query: state.searchState.query,
                                        albums: result.albums
                                    };
                                })
                            });
                            break;
                        }
                        case 'Error':
                            dispatch({
                                tag: 'UpdateSearchState',
                                state: {
                                    tag: 'Error',
                                    query: state.searchState.query,
                                    message: result.message
                                }
                            });
                        // 'Aborted' is not handled because the only time the
                        // request is aborted is when another is sent, in
                        // which case the search state is updated to 'Loading'
                        // anyway
                    }
                });
            }
            case 'UpdateSearchState':
                return update(produce(state, state => {
                    state.searchState = action.state;
                }));
            case 'UpdateSearchQuery': {
                if (state.searchState.tag === 'Loading') {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    state.searchState.query = action.query;
                }));
            }
            case 'DragChartAlbum': {
                if (action.sourceID === action.targetID) {
                    return noUpdate;
                }
                const activeChart = state.charts[state.activeChartIndex];
                let sourceIndex;
                let targetIndex;
                for (let index = 0; index < activeChart.albums.length; index++) {
                    const album = activeChart.albums[index];
                    const id = getAlbumID(album);
                    if (id === action.sourceID) {
                        sourceIndex = index;
                    }
                    else if (id === action.targetID) {
                        targetIndex = index;
                    }
                }
                if (sourceIndex === undefined || targetIndex === undefined) {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    const albums = state.charts[state.activeChartIndex].albums;
                    const source = albums[sourceIndex];
                    if (sourceIndex < targetIndex) {
                        for (let index = sourceIndex; index < targetIndex; index++) {
                            albums[index] = albums[index + 1];
                        }
                    }
                    else {
                        for (let index = sourceIndex; index > targetIndex; index--) {
                            albums[index] = albums[index - 1];
                        }
                    }
                    albums[targetIndex] = source;
                }));
            }
            case 'DropSearchAlbum': {
                if (state.searchState.tag !== 'Complete') {
                    return noUpdate;
                }
                const source = state.searchState.albums[action.sourceIndex];
                if (source === undefined) {
                    return noUpdate;
                }
                const chart = state.charts[state.activeChartIndex];
                const targetIndex = findAlbumIndexWithID(chart.albums, action.targetID);
                if (targetIndex === null) {
                    return noUpdate;
                }
                const id = getAlbumID(chart.albums[targetIndex]);
                return update(produce(state, state => {
                    state.charts[state.activeChartIndex].albums[targetIndex] = {
                        ...source,
                        id
                    };
                }));
            }
            case 'PromptToRenameAlbum':
                return sideEffect((dispatch, state) => {
                    var _a;
                    const album = state.charts[state.activeChartIndex]
                        .albums
                        .find(album => getAlbumID(album) === action.id);
                    if (album === undefined || identifiedAlbumIsPlaceholder(album)) {
                        return;
                    }
                    const name = (_a = prompt('Enter new album name:', album.name)) === null || _a === void 0 ? void 0 : _a.trim();
                    if (name === undefined || name.length === 0) {
                        return;
                    }
                    dispatch({
                        tag: 'RenameAlbum',
                        id: action.id,
                        name
                    });
                });
            case 'RenameAlbum': {
                const chart = state.charts[state.activeChartIndex];
                const index = findAlbumIndexWithID(chart.albums, action.id);
                if (index === null) {
                    return noUpdate;
                }
                const album = chart.albums[index];
                if (identifiedAlbumIsPlaceholder(album)) {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    const chart = state.charts[state.activeChartIndex];
                    chart.albums[index] = produce(album, album => {
                        album.name = action.name;
                    });
                }));
            }
            case 'DeleteAlbum': {
                const index = findAlbumIndexWithID(state.charts[state.activeChartIndex].albums, action.id);
                if (index === null) {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    state.charts[state.activeChartIndex].albums[index] = action.id;
                }));
            }
            case 'UpdateScreenshotLoading':
                return update(produce(state, state => {
                    state.screenshotState.loading = action.loading;
                }));
            case 'UpdateScreenshotScale':
                return update(produce(state, state => {
                    state.screenshotState.scale = action.scale;
                }));
            case 'TakeScreenshot': {
                if (state.screenshotState.loading) {
                    return noUpdate;
                }
                return updateWithSideEffect(produce(state, state => {
                    state.screenshotState.loading = true;
                }), async (dispatch, state) => {
                    const uri = await elementToDataURI(action.element, state.screenshotState.scale);
                    downloadURI(uri, 'chart.png');
                    dispatch({
                        tag: 'UpdateScreenshotLoading',
                        loading: false
                    });
                });
            }
            case 'UpdateChartShape':
                return update(produce(state, state => {
                    const chart = state.charts[state.activeChartIndex];
                    chart.shape = action.shape;
                    chart.size = action.size;
                }));
            case 'DropExternalFile': {
                const exists = state.charts[state.activeChartIndex].albums.some(album => getAlbumID(album) === action.targetID);
                if (!exists) {
                    return noUpdate;
                }
                return sideEffect(async (dispatch) => dispatch({
                    tag: 'LoadExternalFile',
                    targetID: action.targetID,
                    uri: await fileToDataURI(action.file),
                    name: action.file.name
                }));
            }
            case 'LoadExternalFile': {
                const targetIndex = findAlbumIndexWithID(state.charts[state.activeChartIndex].albums, action.targetID);
                if (targetIndex === null) {
                    return noUpdate;
                }
                return update(produce(state, state => {
                    state.charts[state.activeChartIndex].albums[targetIndex] = {
                        id: action.targetID,
                        name: action.name,
                        url: action.uri
                    };
                }));
            }
            case 'HighlightAlbum': {
                const target = state.charts[state.activeChartIndex].albums.find(album => !identifiedAlbumIsPlaceholder(album) && album.id === action.targetID);
                if (target === undefined) {
                    return update(produce(state, state => {
                        state.highlightedID = null;
                    }));
                }
                return update(produce(state, state => {
                    state.highlightedID = action.targetID;
                }));
            }
            case 'UnhighlightAlbum':
                return update(produce(state, state => {
                    state.highlightedID = null;
                }));
            case 'ImportViewerChart': {
                if (((_c = state.route) === null || _c === void 0 ? void 0 : _c.tag) !== 'Viewer' || state.route.chart === null) {
                    return noUpdate;
                }
                const { chart } = state.route;
                return update(produce(state, state => {
                    state.charts.push(chart);
                    state.activeChartIndex = state.charts.length - 1;
                    state.highlightedID = null;
                }));
            }
        }
    };
}
//# sourceMappingURL=reducer.js.map