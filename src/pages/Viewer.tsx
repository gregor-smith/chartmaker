import type { CSSProperties, FC, RefObject } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart, ScreenshotState } from '../types.js'
import { ViewerSidebar } from '../components/ViewerSidebar.js'
import { ViewerChart } from '../components/ViewerChart.js'
import { ERROR_TEXT_COLOUR } from '../style.js'


const errorStyle: CSSProperties = {
    color: ERROR_TEXT_COLOUR
}


export type ViewerProps =
    & DispatchProps
    & {
        chartRef: RefObject<HTMLElement>
        chart: Chart | null
        screenshotState: ScreenshotState
        highlighted: number | null
    }


export const Viewer: FC<ViewerProps> = ({
    dispatch,
    chartRef,
    chart,
    screenshotState,
    highlighted
}) => {
    let content: JSX.Element
    if (chart === null) {
        content = (
            <main>
                <h1 style={errorStyle}>
                    Invalid chart URL
                </h1>
            </main>
        )
    }
    else {
        content = (
            <ViewerChart {...chart}
                ref={chartRef}
                dispatch={dispatch}
                highlighted={highlighted}/>
        )
    }

    return (
        <>
            <ViewerSidebar dispatch={dispatch}
                chartRef={chartRef}
                screenshotState={screenshotState}
                importDisabled={chart === null}/>
            {content}
        </>
    )
}
