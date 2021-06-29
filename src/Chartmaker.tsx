import 'bootstrap/scss/bootstrap-reboot.scss'
import { FC, useRef, useEffect, ComponentType, CSSProperties } from 'react'
import { useSideEffectReducer } from 'react-use-side-effect-reducer'

import { createReducer } from './reducer.js'
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
import type { Searcher, State } from './types.js'
import { searchLastFM } from './api.js'
import { APIKeyInput, APIKeyInputProps } from './components/APIKeyInput.js'
import { CopyLinkButton, CopyLinkButtonProps } from './components/CopyLinkButton.js'


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
    searcher?: Searcher
    keyInputComponent?: ComponentType<APIKeyInputProps>
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>
}


export const Chartmaker: FC<ChartmakerProps> = ({
    searcher = searchLastFM,
    keyInputComponent = APIKeyInput,
    copyLinkComponent = CopyLinkButton
}) => {
    const chartRef = useRef<HTMLElement>(null)
    const [ state, dispatch ] = useSideEffectReducer(
        loadState,
        createReducer(searcher)
    )
    useEffect(
        () => saveStateToLocalStorage(state),
        [ state ]
    )
    useEffect(
        () => {
            function popRoute() {
                dispatch({
                    tag: 'PopRoute',
                    route: routeFromHash(location.hash)
                })
            }

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
