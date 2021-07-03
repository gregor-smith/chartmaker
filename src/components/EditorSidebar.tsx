import type { ComponentType, FC, RefObject } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart, SearchState, ScreenshotState } from '../types.js'
import { ChartManager } from './ChartManager.js'
import { APIKeyInput, APIKeyInputProps } from './APIKeyInput.js'
import { ScreenshotButtons } from './ScreenshotButtons.js'
import { SearchBox } from './SearchBox.js'
import { SearchResults } from './SearchResults.js'
import { ChartShapeControls } from './ChartShapeControls.js'
import { Sidebar } from './Sidebar.js'
import { LoadSaveButtons } from './LoadSaveButtons.js'
import { CopyLinkButton, CopyLinkButtonProps } from './CopyLinkButton.js'


export type EditorSidebarProps = DispatchProps & {
    charts: Chart[]
    activeChartIndex: number
    apiKey: string
    searchState: SearchState
    screenshotState: ScreenshotState
    chartRef: RefObject<HTMLElement>
    keyInputComponent?: ComponentType<APIKeyInputProps>
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>
}


export const EditorSidebar: FC<EditorSidebarProps> = ({
    dispatch,
    charts,
    activeChartIndex,
    apiKey,
    searchState,
    screenshotState,
    chartRef,
    copyLinkComponent: CopyLinkComponent = CopyLinkButton,
    keyInputComponent: KeyInputComponent = APIKeyInput
}) => {
    let searchResults: JSX.Element | undefined
    if (searchState.tag === 'Complete' && searchState.albums.length > 0) {
        searchResults = <SearchResults albums={searchState.albums}/>
    }

    return (
        <Sidebar>
            <LoadSaveButtons dispatch={dispatch}>
                <CopyLinkComponent chart={charts[activeChartIndex]!}/>
            </LoadSaveButtons>
            <ChartManager dispatch={dispatch}
                charts={charts}
                activeChartIndex={activeChartIndex}/>
            <ScreenshotButtons dispatch={dispatch}
                chartRef={chartRef}
                screenshotState={screenshotState}/>
            <ChartShapeControls {...charts[activeChartIndex]!}
                dispatch={dispatch}/>
            <KeyInputComponent dispatch={dispatch} apiKey={apiKey}/>
            <SearchBox dispatch={dispatch} searchState={searchState}/>
            {searchResults}
        </Sidebar>
    )
}
