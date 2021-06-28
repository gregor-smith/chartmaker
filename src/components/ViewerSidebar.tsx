import type { FC, RefObject } from 'react'

import type { ScreenshotState } from '../types.js'
import { Sidebar } from './Sidebar.js'
import { ScreenshotButtons } from './ScreenshotButtons.js'
import type { DispatchProps } from '../reducer.js'
import { ViewerNavigationButtons } from './ViewerNavigationButtons.js'


export type ViewerSidebarProps = DispatchProps & {
    screenshotState: ScreenshotState
    chartRef: RefObject<HTMLElement>
    importDisabled: boolean
}


export const ViewerSidebar: FC<ViewerSidebarProps> = ({
    dispatch,
    chartRef,
    screenshotState,
    importDisabled
}) =>
    <Sidebar>
        <ViewerNavigationButtons dispatch={dispatch}
            importDisabled={importDisabled}/>
        <ScreenshotButtons dispatch={dispatch}
            chartRef={chartRef}
            screenshotState={screenshotState}/>
    </Sidebar>
