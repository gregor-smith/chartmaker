import { produce } from 'immer'

import {
    TypedUseSelectorHook,
    useSelector as _useSelector,
    useDispatch as _useDispatch
} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { createChart, createInitialState } from '@/state'
import { findIndex } from '@/utils'
import { State, SearchState, ChartShape } from '@/types'
import { MAX_SCREENSHOT_SCALE, MAX_COLLAGE_ROWS_X, MAX_COLLAGE_ROWS_Y } from '@/constants'


export type Action =
    | { type: 'UpdateAPIKey', apiKey: string }
    | { type: 'UpdateActiveChart', index: number }
    | { type: 'AddNewChart', name: string }
    | { type: 'RenameActiveChart', name: string }
    | { type: 'DeleteActiveChart' }
    | { type: 'LoadState', state: State }
    | { type: 'UpdateSearchState', state: SearchState }
    | { type: 'UpdateSearchQuery', query: string }
    | { type: 'DragChartAlbum', sourceID: number, targetID: number }
    | { type: 'DropSearchAlbum', sourceID: number, targetID: number }
    | { type: 'RenameAlbum', id: number, name: string }
    | { type: 'DeleteAlbum', id: number }
    | { type: 'UpdateScreenshotLoading', loading: boolean }
    | { type: 'UpdateScreenshotScale', scale: number }
    | { type: 'UpdateChartShape', shape: ChartShape, rowsX: number, rowsY: number }
    | { type: 'LoadExternalFile', uri: string, name: string, targetID: number }


export type Dispatch = ThunkDispatch<State, never, Action>


export function reducer(state = createInitialState(), action: Action): State {
    switch (action.type) {
        case 'UpdateAPIKey':
            return produce(state, state => {
                state.apiKey = action.apiKey
            })

        case 'UpdateActiveChart':
            return produce(state, state => {
                state.activeChartIndex = action.index
            })

        case 'AddNewChart': {
            const [ albumIDCounter, chart ] = createChart({
                albumIDCounter: state.albumIDCounter,
                name: action.name
            })
            return produce(state, state => {
                state.charts.push(chart)
                state.albumIDCounter = albumIDCounter
                state.activeChartIndex = state.charts.length - 1
            })
        }

        case 'RenameActiveChart':
            return produce(state, state => {
                state.charts[state.activeChartIndex].name = action.name
            })

        case 'DeleteActiveChart': {
            if (state.charts.length === 1) {
                const [ albumIDCounter, chart ] = createChart({
                    albumIDCounter: state.albumIDCounter
                })
                return produce(state, state => {
                    state.charts = [ chart ]
                    state.activeChartIndex = 0
                    state.albumIDCounter = albumIDCounter
                })
            }
            return produce(state, state => {
                state.charts.splice(state.activeChartIndex, 1)
                state.activeChartIndex = state.activeChartIndex - 1 < 0
                    ? state.charts.length - 1
                    : state.activeChartIndex - 1
            })
        }

        case 'LoadState':
            return action.state

        case 'UpdateSearchState':
            return produce(state, state => {
                state.search = action.state
            })

        case 'UpdateSearchQuery': {
            if (state.search.tag === 'Loading') {
                return state
            }
            return produce(state, state => {
                state.search.query = action.query
            })
        }

        case 'DragChartAlbum': {
            if (action.sourceID === action.targetID) {
                return state
            }

            const activeChart = state.charts[state.activeChartIndex]

            const sourceIndex = findIndex(activeChart.albums, album => album.id === action.sourceID)
            if (sourceIndex === null) {
                return state
            }

            const targetIndex = findIndex(activeChart.albums, album => album.id === action.targetID)
            if (targetIndex === null) {
                return state
            }

            return produce(state, state => {
                const albums = state.charts[state.activeChartIndex].albums
                const source = { ...albums[sourceIndex] }
                if (sourceIndex < targetIndex) {
                    for (let index = sourceIndex; index < targetIndex; index++) {
                        albums[index] = albums[index + 1]
                    }
                }
                else {
                    for (let index = sourceIndex; index > targetIndex; index--) {
                        albums[index] = albums[index - 1]
                    }
                }
                albums[targetIndex] = source
            })
        }

        case 'DropSearchAlbum': {
            if (state.search.tag !== 'Complete') {
                return state
            }

            const source = state.search.albums.find(album => album.id === action.sourceID)
            if (source === undefined) {
                return state
            }

            const targetIndex = findIndex(
                state.charts[state.activeChartIndex].albums,
                album => album.id === action.targetID
            )
            if (targetIndex === null) {
                return state
            }

            return produce(state, state => {
                const chart = state.charts[state.activeChartIndex]
                chart.albums[targetIndex] = produce(source, album => {
                    album.id = state.albumIDCounter + 1
                })
                state.albumIDCounter++
            })
        }

        case 'RenameAlbum': {
            const chart = state.charts[state.activeChartIndex]

            const index = findIndex(chart.albums, album => album.id === action.id)
            if (index === null) {
                return state
            }

            const album = chart.albums[index]
            if (album.placeholder) {
                return state
            }

            return produce(state, state => {
                const chart = state.charts[state.activeChartIndex]
                chart.albums[index] = produce(album, album => {
                    album.name = action.name
                })
            })
        }

        case 'DeleteAlbum': {
            const index = findIndex(
                state.charts[state.activeChartIndex].albums,
                album => album.id === action.id
            )
            if (index === null) {
                return state
            }
            return produce(state, state => {
                state.charts[state.activeChartIndex].albums[index] = {
                    placeholder: true,
                    id: action.id
                }
            })
        }

        case 'UpdateScreenshotLoading':
            return produce(state, state => {
                state.screenshot.loading = action.loading
            })

        case 'UpdateScreenshotScale': {
            if (state.screenshot.loading
                    || action.scale < 1
                    || action.scale > MAX_SCREENSHOT_SCALE) {
                return state
            }
            return produce(state, state => {
                state.screenshot.scale = action.scale
            })
        }

        case 'UpdateChartShape': {
            if (action.rowsX < 1
                    || action.rowsX > MAX_COLLAGE_ROWS_X
                    || action.rowsY < 1
                    || action.rowsY > MAX_COLLAGE_ROWS_Y) {
                return state
            }
            return produce(state, state => {
                const chart = state.charts[state.activeChartIndex]
                chart.shape = action.shape
                chart.rowsX = action.rowsX
                chart.rowsY = action.rowsY
            })
        }

        case 'LoadExternalFile': {
            const targetIndex = findIndex(
                state.charts[state.activeChartIndex].albums,
                album => album.id === action.targetID
            )
            if (targetIndex === null) {
                return state
            }
            return produce(state, state => {
                state.charts[state.activeChartIndex].albums[targetIndex] = {
                    placeholder: false,
                    id: action.targetID,
                    name: action.name,
                    url: action.uri
                }
            })
        }

        // IMPORTANT: this fallthrough case must be here even if the switch is
        // exhaustive or else initial render will silently fail
        default:
            return state
    }
}


export const useSelector: TypedUseSelectorHook<State> = _useSelector

export const useDispatch: () => Dispatch = _useDispatch
