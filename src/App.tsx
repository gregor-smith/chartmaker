import { FC, useRef, useEffect } from 'react'
import { css } from 'emotion'
import { useSideEffectReducer } from 'react-use-side-effect-reducer'

import { createReducer } from '@/reducer'
import {
    createInitialState,
    loadStateFromLocalStorage,
    routeFromHash,
    saveStateToLocalStorage
} from '@/utils'
import {
    BACKGROUND_COLOUR,
    TEXT_COLOUR,
    FONT_SIZE,
    CONTAINER_PADDING_SIZE
} from '@/style'
import { Editor } from '@/pages/Editor'
import { Viewer } from '@/pages/Viewer'
import type { Searcher, State } from '@/types'
import { searchLastFM } from '@/api'


function loadState(): State {
    return loadStateFromLocalStorage() ?? createInitialState()
}


const rootStyle = css({
    display: 'flex',
    alignItems: 'start',
    minHeight: '100vh',
    minWidth: 'max-content',
    background: BACKGROUND_COLOUR,
    color: TEXT_COLOUR,
    fontSize: FONT_SIZE,
    padding: CONTAINER_PADDING_SIZE
})


export type AppProps = {
    searcher?: Searcher
    showAPIKeyInput?: boolean
    showCopyLinkButton?: boolean
}


export const App: FC<AppProps> = ({
    searcher = searchLastFM,
    showAPIKeyInput = true,
    showCopyLinkButton = true
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
                    showAPIKeyInput={showAPIKeyInput}
                    showCopyLinkButton={showCopyLinkButton}/>
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
        <div className={rootStyle}>
            {page}
        </div>
    )
}
