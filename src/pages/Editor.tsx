import type { ComponentType, FC, RefObject } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { State } from '../types.js'
import { EditorSidebar } from '../components/EditorSidebar.js'
import { EditorChart } from '../components/EditorChart.js'
import type { APIKeyInputProps } from '../components/APIKeyInput.js'
import type { CopyLinkButtonProps } from '../components/CopyLinkButton.js'


export type EditorProps =
    & DispatchProps
    & Omit<State, 'version' | 'viewing'>
    & {
        chartRef: RefObject<HTMLElement>
        keyInputComponent: ComponentType<APIKeyInputProps>
        copyLinkComponent: ComponentType<CopyLinkButtonProps>
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
    copyLinkComponent,
    keyInputComponent
}) =>
    <>
        <EditorSidebar dispatch={dispatch}
            charts={charts}
            activeChartIndex={activeChartIndex}
            apiKey={apiKey}
            searchState={searchState}
            screenshotState={screenshotState}
            chartRef={chartRef}
            copyLinkComponent={copyLinkComponent}
            keyInputComponent={keyInputComponent}/>
        <EditorChart {...charts[activeChartIndex]!}
            ref={chartRef}
            dispatch={dispatch}
            highlighted={highlightedID}/>
    </>
