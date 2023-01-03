import html2canvas from 'html2canvas';
import { fromUint8Array as base64FromUint8Array } from 'js-base64';
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { match, Unknown, when } from 'runtypes';
import { DEFAULT_CHART_NAME, CHART_ALBUMS_COUNT, LOCAL_STORAGE_KEY, DEFAULT_CHART_SHAPE, DEFAULT_CHART_SIZE } from './constants.js';
import { LARGE_ALBUM_SIZE, MEDIUM_ALBUM_SIZE, SMALL_ALBUM_SIZE, TINY_ALBUM_SIZE, VERY_LARGE_ALBUM_SIZE, VERY_SMALL_ALBUM_SIZE, BACKGROUND_COLOUR } from './style.js';
import { V1State as V1ExportState, V2State as V2ExportState, ExportState as V3ExportState, ViewerChart } from './types.js';
export async function elementToDataURI(element, scale) {
    const canvas = await html2canvas(element, {
        allowTaint: true,
        scale,
        useCORS: true,
        imageTimeout: 0,
        backgroundColor: BACKGROUND_COLOUR
    });
    return canvas.toDataURL();
}
export function jsonToDataURI(json) {
    return 'data:application/json;charset=utf-8,' + encodeURIComponent(json);
}
export async function fileToDataURI(file) {
    const buffer = await file.arrayBuffer();
    const array = new Uint8Array(buffer);
    const base64 = base64FromUint8Array(array);
    return `data:${file.type};base64,${base64}`;
}
export function downloadURI(uri, filename) {
    const link = document.createElement('a');
    link.href = uri;
    link.download = filename;
    link.click();
    link.remove();
}
export function createChart(name = DEFAULT_CHART_NAME) {
    return {
        name,
        albums: [...Array(CHART_ALBUMS_COUNT).keys()],
        shape: DEFAULT_CHART_SHAPE,
        size: DEFAULT_CHART_SIZE
    };
}
export function createInitialState() {
    return {
        apiKey: '',
        charts: [createChart()],
        activeChartIndex: 0,
        searchState: {
            tag: 'Waiting',
            query: ''
        },
        screenshotState: {
            loading: false,
            scale: 1
        },
        route: null,
        highlightedID: null
    };
}
export const validateUnknownState = match(when(V3ExportState, createStateFromV3ExportState), when(V2ExportState, createStateFromV2ExportState), when(V1ExportState, createStateFromV1ExportState), when(Unknown, () => null));
function decodeExportAlbums(exportAlbums) {
    const albums = [];
    for (let index = 0; index < CHART_ALBUMS_COUNT; index++) {
        const album = exportAlbums[index];
        albums.push(album === undefined || unidentifiedAlbumIsPlaceholder(album)
            ? index
            : {
                id: index,
                name: album.name,
                url: album.url
            });
    }
    return albums;
}
function encodeExportAlbums(albums) {
    const exportAlbums = [];
    let sliceIndex;
    for (let index = 0; index < albums.length; index++) {
        const album = albums[index];
        if (identifiedAlbumIsPlaceholder(album)) {
            exportAlbums.push(null);
            sliceIndex !== null && sliceIndex !== void 0 ? sliceIndex : (sliceIndex = index);
        }
        else {
            exportAlbums.push({
                name: album.name,
                url: album.url
            });
            sliceIndex = undefined;
        }
    }
    return exportAlbums.slice(0, sliceIndex);
}
function createStateFromV1ExportState(state) {
    return {
        activeChartIndex: state.activeChartIndex,
        apiKey: state.apiKey,
        screenshotState: state.screenshot,
        searchState: state.search,
        charts: state.charts.map(chart => ({
            name: chart.name,
            shape: [chart.rowsX, chart.rowsY],
            size: chart.shape.tag === 'Collage'
                ? null
                : chart.shape.size,
            albums: chart.albums.map((album, index) => album.placeholder
                ? index
                : {
                    id: index,
                    name: album.name,
                    url: album.url
                })
        })),
        highlightedID: null,
        route: null
    };
}
function createStateFromV2ExportState(state) {
    return {
        activeChartIndex: state.activeChartIndex,
        apiKey: state.apiKey,
        screenshotState: state.screenshot,
        searchState: state.search,
        charts: state.charts.map(chart => ({
            name: chart.name,
            shape: [chart.rowsX, chart.rowsY],
            size: chart.shape.tag === 'Collage'
                ? null
                : chart.shape.size,
            albums: chart.albums.map((album, index) => identifiedAlbumIsPlaceholder(album)
                ? index
                : {
                    id: index,
                    name: album.name,
                    url: album.url
                })
        })),
        highlightedID: null,
        route: null
    };
}
function createStateFromV3ExportState(state) {
    return {
        activeChartIndex: state.activeChartIndex,
        apiKey: state.apiKey,
        screenshotState: {
            loading: false,
            scale: 1
        },
        searchState: {
            tag: 'Waiting',
            query: state.search
        },
        charts: state.charts.map(chart => ({
            name: chart.name,
            shape: chart.shape,
            size: chart.size,
            albums: decodeExportAlbums(chart.albums)
        })),
        highlightedID: null,
        route: null
    };
}
export function createExportState(state) {
    return {
        version: 3,
        activeChartIndex: state.activeChartIndex,
        apiKey: state.apiKey,
        search: state.searchState.query,
        charts: state.charts.map(chart => ({
            name: chart.name,
            size: chart.size,
            shape: chart.shape,
            albums: encodeExportAlbums(chart.albums)
        }))
    };
}
export function loadStateFromLocalStorage() {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) {
        return null;
    }
    let state;
    try {
        state = JSON.parse(value);
    }
    catch {
        return null;
    }
    return validateUnknownState(state);
}
export function saveStateToLocalStorage(state) {
    const escaped = createExportState(state);
    const json = JSON.stringify(escaped);
    localStorage.setItem(LOCAL_STORAGE_KEY, json);
}
export function identifiedAlbumIsPlaceholder(album) {
    return typeof album === 'number';
}
function identifiedAlbumIsNamed(album) {
    return !identifiedAlbumIsPlaceholder(album);
}
export function unidentifiedAlbumIsPlaceholder(album) {
    return album === null;
}
export function getAlbumID(album) {
    return identifiedAlbumIsPlaceholder(album) ? album : album.id;
}
export function findAlbumIndexWithID(albums, id) {
    const index = albums.findIndex(album => getAlbumID(album) === id);
    return index === -1
        ? null
        : index;
}
function encodeViewerChart(chart) {
    var _a;
    const viewerChart = {
        name: chart.name,
        size: (_a = chart.size) !== null && _a !== void 0 ? _a : chart.shape,
        albums: encodeExportAlbums(chart.albums)
    };
    const json = JSON.stringify(viewerChart);
    return compressToEncodedURIComponent(json);
}
function decodeViewerChart(encoded) {
    let json;
    try {
        json = decompressFromEncodedURIComponent(encoded);
    }
    catch {
        return null;
    }
    if (json === null || json === undefined) {
        return null;
    }
    let chart;
    try {
        chart = JSON.parse(json);
    }
    catch {
        return null;
    }
    if (!ViewerChart.guard(chart)) {
        return null;
    }
    return {
        name: chart.name,
        shape: typeof chart.size === 'number'
            ? DEFAULT_CHART_SHAPE
            : chart.size,
        size: typeof chart.size === 'number'
            ? chart.size
            : null,
        albums: decodeExportAlbums(chart.albums)
    };
}
function top40Rows(albums) {
    return [
        {
            albums: albums.slice(0, 5),
            size: VERY_LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(5, 11),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(11, 17),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(17, 24),
            size: MEDIUM_ALBUM_SIZE
        },
        {
            albums: albums.slice(24, 31),
            size: MEDIUM_ALBUM_SIZE
        },
        {
            albums: albums.slice(31, 40),
            size: SMALL_ALBUM_SIZE
        }
    ];
}
function top42Rows(albums) {
    return [
        {
            albums: albums.slice(0, 5),
            size: VERY_LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(5, 10),
            size: VERY_LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(10, 16),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(16, 22),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(22, 32),
            size: VERY_SMALL_ALBUM_SIZE
        },
        {
            albums: albums.slice(32, 42),
            size: VERY_SMALL_ALBUM_SIZE
        }
    ];
}
function top100Rows(albums) {
    return [
        {
            albums: albums.slice(0, 5),
            size: VERY_LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(5, 10),
            size: VERY_LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(10, 16),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(16, 22),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(22, 28),
            size: LARGE_ALBUM_SIZE
        },
        {
            albums: albums.slice(28, 38),
            size: VERY_SMALL_ALBUM_SIZE
        },
        {
            albums: albums.slice(38, 48),
            size: VERY_SMALL_ALBUM_SIZE
        },
        {
            albums: albums.slice(48, 58),
            size: VERY_SMALL_ALBUM_SIZE
        },
        {
            albums: albums.slice(58, 72),
            size: TINY_ALBUM_SIZE
        },
        {
            albums: albums.slice(72, 86),
            size: TINY_ALBUM_SIZE
        },
        {
            albums: albums.slice(86, 100),
            size: TINY_ALBUM_SIZE
        }
    ];
}
function titleGroupsFromRows(rows) {
    const groups = [];
    let lastSize = '';
    for (const row of rows) {
        const named = row.albums.filter(identifiedAlbumIsNamed);
        if (row.size === lastSize) {
            for (const album of named) {
                groups[groups.length - 1].push(album);
            }
        }
        else {
            groups.push(named);
            lastSize = row.size;
        }
    }
    return groups;
}
function collageGroups(albums, [rowsX, rowsY]) {
    const rows = [];
    const groups = [];
    for (let y = 0; y < rowsY; y++) {
        const slice = albums.slice(rowsX * y, (rowsX * y) + rowsX);
        rows.push({
            albums: slice,
            size: LARGE_ALBUM_SIZE
        });
        groups.push(slice.filter(identifiedAlbumIsNamed));
    }
    return [rows, groups];
}
export function splitAlbumsAccordingToShape(albums, shape, size) {
    let rows;
    switch (size) {
        case 40:
            rows = top40Rows(albums);
            break;
        case 42:
            rows = top42Rows(albums);
            break;
        case 100:
            rows = top100Rows(albums);
            break;
        case null:
            return collageGroups(albums, shape);
    }
    return [rows, titleGroupsFromRows(rows)];
}
export function routeToHash(route) {
    switch (route.tag) {
        case 'Editor':
            return '';
        case 'Viewer': {
            if (route.chart === null) {
                return '';
            }
            const encoded = encodeViewerChart(route.chart);
            return `#${encoded}`;
        }
    }
}
export function routeFromHash(hash) {
    return hash.length === 0
        ? { tag: 'Editor' }
        : {
            tag: 'Viewer',
            chart: decodeViewerChart(location.hash.slice(1))
        };
}
//# sourceMappingURL=utils.js.map