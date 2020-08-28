import produce from 'immer'
import { ThunkAction } from 'redux-thunk'

import type { Action } from '@/reducer'
import { State, NamedAlbum } from '@/types'
import { escapeStateForExport } from '@/state'
import {
    jsonToDataURI,
    downloadURI,
    elementToDataURI,
    findIndex,
    fileToDataURI
} from '@/utils'
import { search } from '@/api'


type SideEffect = ThunkAction<void, State, never, Action>
type AsyncSideEffect = ThunkAction<Promise<void>, State, never, Action>


export function promptForNewChart(): SideEffect {
    return (dispatch, getState) => {
        const state = getState()
        const activeChart = state.charts[state.activeChartIndex]
        const name = prompt('Enter new chart name:', activeChart.name)?.trim()
        if (name === undefined || name.length === 0) {
            return
        }
        if (state.charts.some(chart => chart.name === name)) {
            alert('A chart with that name already exists')
            return
        }
        dispatch({ type: 'AddNewChart', name })
    }
}


export function promptToRenameActiveChart(): SideEffect {
    return (dispatch, getState) => {
        const state = getState()
        const activeChart = state.charts[state.activeChartIndex]
        const name = prompt('Enter new chart name:', activeChart.name)?.trim()
        if (name === undefined || name.length === 0) {
            return
        }
        for (let index = 0; index < state.charts.length; index++) {
            const chart = state.charts[index]
            if (chart.name === name) {
                if (index !== state.activeChartIndex) {
                    alert('A chart with that name already exists')
                }
                return
            }
        }
        dispatch({ type: 'RenameActiveChart', name })
    }
}


export function promptToDeleteActiveChart(): SideEffect {
    return dispatch => {
        if (confirm('Really delete active chart? This cannot be undone')) {
            dispatch({ type: 'DeleteActiveChart' })
        }
    }
}


export function importStateFile(file: Blob): AsyncSideEffect {
    return async dispatch => {
        try {
            const json = await file.text()
            const parsed: unknown = JSON.parse(json)
            const state = State.check(parsed)
            dispatch({ type: 'LoadState', state })
        }
        catch {
            alert('Selected file is invalid')
        }
    }
}

export function promptToExportState(): SideEffect {
    return (_dispatch, getState) => {
        const state = getState()
        const json = JSON.stringify(escapeStateForExport(state))
        const uri = jsonToDataURI(json)
        downloadURI(uri, 'state.json')
    }
}


export function cancelSearchRequest(): SideEffect {
    return (dispatch, getState) => {
        const state = getState()
        if (state.search.tag !== 'Loading') {
            return
        }
        dispatch({
            type: 'UpdateSearchState',
            state: {
                tag: 'Waiting',
                query: state.search.query
            }
        })
        state.search.controller.abort()
    }
}


export function sendSearchRequest(): AsyncSideEffect {
    return async (dispatch, getState) => {
        let state = getState()

        if (state.search.tag === 'Loading'
                || state.search.query.trim().length === 0) {
            return
        }

        if (state.apiKey.trim().length === 0) {
            dispatch({
                type: 'UpdateSearchState',
                state: {
                    tag: 'Error',
                    query: state.search.query,
                    message: 'Last.fm API key required'
                }
            })
            return
        }

        const controller = new AbortController()
        dispatch({
            type: 'UpdateSearchState',
            state: {
                tag: 'Loading',
                query: state.search.query,
                controller
            }
        })

        const result = await search({
            key: state.apiKey,
            query: state.search.query,
            signal: controller.signal
        })

        state = getState()

        switch (result.tag) {
            case 'Ok': {
                const albums: NamedAlbum[] = result.albums.map((album, index) => ({
                    ...album,
                    placeholder: false,
                    id: state.albumIDCounter + index + 1
                }))
                dispatch({
                    type: 'LoadState',
                    state: produce(state, state => {
                        state.search = {
                            tag: 'Complete',
                            query: state.search.query,
                            albums
                        }
                        state.albumIDCounter += result.albums.length
                    })
                })
                break
            }
            case 'StatusError': {
                dispatch({
                    type: 'UpdateSearchState',
                    state: {
                        tag: 'Error',
                        query: state.search.query,
                        message: `Last.fm request returned ${result.status}`
                    }
                })
                break
            }
            case 'JSONDecodeError':
            case 'InvalidResponseData': {
                dispatch({
                    type: 'UpdateSearchState',
                    state: {
                        tag: 'Error',
                        query: state.search.query,
                        message: 'Invalid data returned from Last.fm'
                    }
                })
                break
            }
            case 'NetworkError':
                dispatch({
                    type: 'UpdateSearchState',
                    state: {
                        tag: 'Error',
                        query: state.search.query,
                        message: 'Network error sending request to Last.fm'
                    }
                })
            // 'Cancelled' is not handled because the only time the
            // request is cancelled is when another is sent, in
            // which case the search state is updated to 'Loading'
            // anyway
        }
    }
}


export function promptToRenameAlbum(id: number): SideEffect {
    return (dispatch, getState) => {
        const state = getState()
        const album = state.charts[state.activeChartIndex]
            .albums
            .find(album => album.id === id)
        if (album === undefined || album.placeholder) {
            return
        }

        const name = prompt('Enter new album name:', album.name)?.trim()
        if (name === undefined || name.length === 0) {
            return
        }
        dispatch({ type: 'RenameAlbum', id, name })
    }
}


export function takeScreenshot(element: HTMLElement): AsyncSideEffect {
    return async (dispatch, getState) => {
        if (getState().screenshot.loading) {
            return
        }
        dispatch({ type: 'UpdateScreenshotLoading', loading: true })
        const uri = await elementToDataURI(element, getState().screenshot.scale)
        downloadURI(uri, 'chart.png')
        dispatch({ type: 'UpdateScreenshotLoading', loading: false })
    }
}


export function dropExternalFile(file: File, targetID: number): AsyncSideEffect {
    return async (dispatch, getState) => {
        const state = getState()
        const targetIndex = findIndex(
            state.charts[state.activeChartIndex].albums,
            album => album.id === targetID
        )
        if (targetIndex === null) {
            return
        }

        dispatch({
            type: 'LoadExternalFile',
            targetID,
            uri: await fileToDataURI(file),
            name: file.name
        })
    }
}
