import { useRef, useEffect, ComponentType, CSSProperties, FC, useReducer } from 'react'

import {
    createInitialState,
    loadStateFromLocalStorage,
    routeFromHash,
    saveStateToLocalStorage
} from './utils.js'
import {
    BACKGROUND_COLOUR,
    TEXT_COLOUR,
    FONT_SIZE,
    CONTAINER_PADDING_SIZE
} from './style.js'
import { Editor } from './pages/Editor.js'
import { Viewer } from './pages/Viewer.js'
import type {
    AlbumSearcher,
    AlertShower,
    ChoiceConfirmer,
    FileURIGetter,
    InputPrompter,
    State
} from './types.js'
import type { APIKeyInputProps } from './components/APIKeyInput.js'
import type { CopyLinkButtonProps } from './components/CopyLinkButton.js'
import { reducer } from './reducer.js'


function loadState(): State {
    return loadStateFromLocalStorage() ?? createInitialState()
}


const style: CSSProperties = {
    display: 'flex',
    alignItems: 'start',
    minHeight: '100vh',
    minWidth: 'max-content',
    background: BACKGROUND_COLOUR,
    color: TEXT_COLOUR,
    fontSize: FONT_SIZE,
    padding: CONTAINER_PADDING_SIZE
}


export type ChartmakerProps = {
    keyInputComponent?: ComponentType<APIKeyInputProps>
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>
    searchForAlbums?: AlbumSearcher
    showAlert?: AlertShower
    confirmChoice?: ChoiceConfirmer
    promptForInput?: InputPrompter
    getFileURI?: FileURIGetter
}


export const Chartmaker: FC<ChartmakerProps> = (
    {
        copyLinkComponent,
        keyInputComponent,
        searchForAlbums,
        showAlert,
        confirmChoice,
        promptForInput,
        getFileURI
    }: ChartmakerProps
) => {
    const chartRef = useRef<HTMLElement>(null)
    const [ state, dispatch ] = useReducer(reducer, undefined, loadState)
    useEffect(
        () => saveStateToLocalStorage(state),
        [ state.activeChartIndex, state.apiKey, state.charts, state.searchState.query ]
    )
    useEffect(
        () => {
            const popRoute = () =>
                dispatch({
                    tag: 'PopRoute',
                    route: routeFromHash(location.hash)
                })

            popRoute()
            addEventListener('popstate', popRoute)

            return () => removeEventListener('popstate', popRoute)
        },
        []
    )

    let page: JSX.Element | null
    switch (state.route?.tag) {
        case 'Editor':
            page = (
                <Editor {...state}
                    dispatch={dispatch}
                    chartRef={chartRef}
                    keyInputComponent={keyInputComponent}
                    copyLinkComponent={copyLinkComponent}/>
            )
            break
        case 'Viewer':
            page = (
                <Viewer dispatch={dispatch}
                    chart={state.route.chart}
                    chartRef={chartRef}
                    highlighted={state.highlightedID}
                    screenshotState={state.screenshotState}/>
            )
            break
        case undefined:
            page = null
    }

    return (
        <div style={style}>
            {page}
        </div>
    )
}
