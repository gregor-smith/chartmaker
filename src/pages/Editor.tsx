import type { FC, RefObject } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { State } from '../types.js'
import { EditorSidebar } from '../components/EditorSidebar.js'
import { EditorChart } from '../components/EditorChart.js'


export type EditorProps =
    & DispatchProps
    & Omit<State, 'version' | 'viewing'>
    & {
        chartRef: RefObject<HTMLElement>
        showCopyLinkButton: boolean
        showAPIKeyInput: boolean
    }


export const Editor: FC<EditorProps> = ({
    dispatch,
    charts,
    activeChartIndex,
    apiKey,
    searchState,
    screenshotState,
    highlightedID,
    chartRef,
    showAPIKeyInput,
    showCopyLinkButton
}) =>
    <>
        <EditorSidebar dispatch={dispatch}
            charts={charts}
            activeChartIndex={activeChartIndex}
            apiKey={apiKey}
            searchState={searchState}
            screenshotState={screenshotState}
            chartRef={chartRef}
            showAPIKeyInput={showAPIKeyInput}
            showCopyLinkButton={showCopyLinkButton}/>
        <EditorChart {...charts[activeChartIndex]!}
            ref={chartRef}
            dispatch={dispatch}
            highlighted={highlightedID}/>
    </>
