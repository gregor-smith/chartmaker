import { produce } from 'immer'
import type { Reducer, Dispatch as Dispatch_ } from 'react'

import {
    createChart,
    findAlbumIndexWithID,
    getAlbumID,
    identifiedAlbumIsPlaceholder
} from './utils.js'
import type {
    State,
    SearchState,
    Route,
    CollageSize,
    TopSize,
    ScreenshotScale
} from './types.js'


export type Action =
    | { tag: 'PopRoute', route: Route | null }
    | { tag: 'PushRoute', route: Route, replace: boolean }
    | { tag: 'UpdateAPIKey', apiKey: string }
    | { tag: 'UpdateActiveChart', index: number }
    | { tag: 'AddNewChart', name: string }
    | { tag: 'RenameActiveChart', name: string }
    | { tag: 'DeleteActiveChart' }
    | { tag: 'MoveActiveChart', direction: 'Up' | 'Down' }
    | { tag: 'LoadState', state: State }
    | { tag: 'CancelSearchRequest' }
    | { tag: 'SendSearchRequest' }
    | { tag: 'UpdateSearchState', state: SearchState }
    | { tag: 'UpdateSearchQuery', query: string }
    | { tag: 'DragChartAlbum', sourceID: number, targetID: number }
    | { tag: 'DropSearchAlbum', sourceIndex: number, targetID: number }
    | { tag: 'RenameAlbum', id: number, name: string }
    | { tag: 'DeleteAlbum', id: number }
    | { tag: 'UpdateScreenshotLoading', loading: boolean }
    | { tag: 'UpdateScreenshotScale', scale: ScreenshotScale }
    | { tag: 'UpdateChartShape', shape: CollageSize, size: TopSize | null }
    | { tag: 'LoadExternalFile', uri: string, name: string, targetID: number }
    | { tag: 'HighlightAlbum', targetID: number }
    | { tag: 'UnhighlightAlbum' }
    | { tag: 'ImportViewerChart' }


export type Dispatch = Dispatch_<Action>
export type DispatchProps = {
    dispatch: Dispatch
}


export const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.tag) {
        case 'PopRoute':
            return {
                ...state,
                route: action.route
            }

        case 'PushRoute': {
            if (state.route?.tag === action.route.tag) {
                return state
            }
            return {
                ...state,
                route: action.route
            }
        }

        case 'UpdateAPIKey':
            return {
                ...state,
                apiKey: action.apiKey
            }

        case 'UpdateActiveChart':
            return {
                ...state,
                activeChartIndex: action.index,
                highlightedID: null
            }

        case 'AddNewChart': {
            const chart = createChart(action.name)
            return produce(state, state => {
                state.charts.push(chart)
                state.activeChartIndex = state.charts.length - 1
                state.highlightedID = null
            })
        }

        case 'RenameActiveChart':
            return produce(state, state => {
                state.charts[state.activeChartIndex]!.name = action.name
            })

        case 'DeleteActiveChart': {
            if (state.charts.length === 1) {
                return {
                    ...state,
                    charts: [ createChart() ],
                    activeChartIndex: 0,
                    highlightedID: null
                }
            }
            return produce(state, state => {
                state.charts.splice(state.activeChartIndex, 1)
                state.activeChartIndex = state.activeChartIndex - 1 < 0
                    ? state.charts.length - 1
                    : state.activeChartIndex - 1
                state.highlightedID = null
            })
        }

        case 'MoveActiveChart': {
            if (state.charts.length === 1) {
                return state
            }

            if (action.direction === 'Up') {
                if (state.activeChartIndex === 0) {
                    return state
                }
                return produce(state, state => {
                    const temp = state.charts[state.activeChartIndex - 1]!
                    state.charts[state.activeChartIndex - 1] = state.charts[state.activeChartIndex]!
                    state.charts[state.activeChartIndex] = temp
                    state.activeChartIndex--
                })
            }

            if (state.activeChartIndex === state.charts.length - 1) {
                return state
            }

            return produce(state, state => {
                const temp = state.charts[state.activeChartIndex + 1]!
                state.charts[state.activeChartIndex + 1] = state.charts[state.activeChartIndex]!
                state.charts[state.activeChartIndex] = temp
                state.activeChartIndex++
            })
        }

        case 'LoadState': {
            if (state.route?.tag !== 'Editor') {
                return state
            }
            return {
                ...action.state,
                route: state.route
            }
        }

        case 'CancelSearchRequest': {
            if (state.searchState.tag !== 'Loading') {
                return state
            }
            return {
                ...state,
                searchState: {
                    tag: 'Waiting',
                    query: state.searchState.query
                }
            }
        }

        case 'SendSearchRequest': {
            if (state.searchState.tag === 'Loading'
                    || state.searchState.query.trim().length === 0) {
                return state
            }

            if (state.apiKey.trim().length === 0) {
                return {
                    ...state,
                    searchState: {
                        tag: 'Error',
                        query: state.searchState.query,
                        message: 'API key required'
                    }
                }
            }

            return {
                ...state,
                searchState: {
                    tag: 'Loading',
                    query: state.searchState.query
                }
            }
        }

        case 'UpdateSearchState':
            return {
                ...state,
                searchState: action.state
            }

        case 'UpdateSearchQuery': {
            if (state.searchState.tag === 'Loading') {
                return state
            }
            return produce(state, state => {
                state.searchState.query = action.query
            })
        }

        case 'DragChartAlbum': {
            if (action.sourceID === action.targetID) {
                return state
            }

            const activeChart = state.charts[state.activeChartIndex]!

            let sourceIndex: number | undefined
            let targetIndex: number | undefined
            for (let index = 0; index < activeChart.albums.length; index++) {
                const album = activeChart.albums[index]!
                const id = getAlbumID(album)
                if (id === action.sourceID) {
                    sourceIndex = index
                }
                else if (id === action.targetID) {
                    targetIndex = index
                }
            }
            if (sourceIndex === undefined || targetIndex === undefined) {
                return state
            }

            return produce(state, state => {
                const albums = state.charts[state.activeChartIndex]!.albums
                const source = albums[sourceIndex!]!
                if (sourceIndex! < targetIndex!) {
                    for (let index = sourceIndex!; index < targetIndex!; index++) {
                        albums[index] = albums[index + 1]!
                    }
                }
                else {
                    for (let index = sourceIndex!; index > targetIndex!; index--) {
                        albums[index] = albums[index - 1]!
                    }
                }
                albums[targetIndex!] = source
            })
        }

        case 'DropSearchAlbum': {
            if (state.searchState.tag !== 'Complete') {
                return state
            }

            const source = state.searchState.albums[action.sourceIndex]
            if (source === undefined) {
                return state
            }

            const chart = state.charts[state.activeChartIndex]!

            const targetIndex = findAlbumIndexWithID(chart.albums, action.targetID)
            if (targetIndex === null) {
                return state
            }
            const id = getAlbumID(chart.albums[targetIndex]!)

            return produce(state, state => {
                state.charts[state.activeChartIndex]!.albums[targetIndex] = {
                    ...source,
                    id
                }
            })
        }

        case 'RenameAlbum': {
            const chart = state.charts[state.activeChartIndex]!

            const index = findAlbumIndexWithID(chart.albums, action.id)
            if (index === null) {
                return state
            }

            const album = chart.albums[index]!
            if (identifiedAlbumIsPlaceholder(album)) {
                return state
            }

            return produce(state, state => {
                const chart = state.charts[state.activeChartIndex]!
                chart.albums[index] = produce(album, album => {
                    album.name = action.name
                })
            })
        }

        case 'DeleteAlbum': {
            const index = findAlbumIndexWithID(
                state.charts[state.activeChartIndex]!.albums,
                action.id
            )
            if (index === null) {
                return state
            }
            return produce(state, state => {
                state.charts[state.activeChartIndex]!.albums[index] = action.id
            })
        }

        case 'UpdateScreenshotLoading':
            return produce(state, state => {
                state.screenshotState.loading = action.loading
            })

        case 'UpdateScreenshotScale':
            return produce(state, state => {
                state.screenshotState.scale = action.scale
            })

        case 'UpdateChartShape':
            return produce(state, state => {
                const chart = state.charts[state.activeChartIndex]!
                chart.shape = action.shape
                chart.size = action.size
            })

        case 'LoadExternalFile': {
            const targetIndex = findAlbumIndexWithID(
                state.charts[state.activeChartIndex]!.albums,
                action.targetID
            )
            if (targetIndex === null) {
                return state
            }
            return produce(state, state => {
                state.charts[state.activeChartIndex]!.albums[targetIndex] = {
                    id: action.targetID,
                    name: action.name,
                    url: action.uri
                }
            })
        }

        case 'HighlightAlbum': {
            const target = state.charts[state.activeChartIndex]!.albums.find(album =>
                !identifiedAlbumIsPlaceholder(album) && album.id === action.targetID
            )
            return {
                ...state,
                highlightedID: target === undefined ? null : action.targetID
            }
        }

        case 'UnhighlightAlbum':
            return {
                ...state,
                highlightedID: null
            }

        case 'ImportViewerChart': {
            if (state.route?.tag !== 'Viewer' || state.route.chart === null) {
                return state
            }
            const { chart } = state.route
            return produce(state, state => {
                state.charts.push(chart)
                state.activeChartIndex = state.charts.length - 1
                state.highlightedID = null
            })
        }
    }
}
