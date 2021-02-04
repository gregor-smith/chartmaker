import type { FC, RefObject } from 'react'

import type { DispatchProps } from '@/reducer'
import type { State } from '@/types'
import { EditorSidebar } from '@/components/EditorSidebar'
import { EditorChart } from '@/components/EditorChart'


export type EditorProps =
    & DispatchProps
    & Omit<State, 'version' | 'viewing'>
    & {
        chartRef: RefObject<HTMLElement>
    }


export const Editor: FC<EditorProps> = ({
    dispatch,
    charts,
    activeChartIndex,
    apiKey,
    search,
    screenshot,
    highlightedID,
    chartRef
}) =>
    <>
        <EditorSidebar dispatch={dispatch}
            charts={charts}
            activeChartIndex={activeChartIndex}
            apiKey={apiKey}
            searchState={search}
            screenshotState={screenshot}
            chartRef={chartRef}/>
        <EditorChart {...charts[activeChartIndex]!}
            innerRef={chartRef}
            dispatch={dispatch}
            highlighted={highlightedID}/>
    </>