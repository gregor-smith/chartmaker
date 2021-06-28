import type { FC, RefObject } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart, SearchState, ScreenshotState } from '../types.js'
import { ChartManager } from './ChartManager.js'
import { APIKeyInput } from './APIKeyInput.js'
import { ScreenshotButtons } from './ScreenshotButtons.js'
import { SearchBox } from './SearchBox.js'
import { SearchResults } from './SearchResults.js'
import { ChartShapeControls } from './ChartShapeControls.js'
import { Sidebar } from './Sidebar.js'
import { LoadSaveButtons } from './LoadSaveButtons.js'


export type EditorSidebarProps = DispatchProps & {
    charts: Chart[]
    activeChartIndex: number
    apiKey: string
    searchState: SearchState
    screenshotState: ScreenshotState
    chartRef: RefObject<HTMLElement>
    showAPIKeyInput: boolean
    showCopyLinkButton: boolean
}


export const EditorSidebar: FC<EditorSidebarProps> = ({
    dispatch,
    charts,
    activeChartIndex,
    apiKey,
    searchState,
    screenshotState,
    chartRef,
    showAPIKeyInput,
    showCopyLinkButton
}) => {
    let searchResults: JSX.Element | undefined
    if (searchState.tag === 'Complete' && searchState.albums.length > 0) {
        searchResults = <SearchResults albums={searchState.albums}/>
    }

    let apiKeyInput: JSX.Element | undefined
    if (showAPIKeyInput) {
        apiKeyInput = <APIKeyInput dispatch={dispatch} apiKey={apiKey}/>
    }

    return (
        <Sidebar>
            <LoadSaveButtons dispatch={dispatch}
                chart={charts[activeChartIndex]!}
                showCopyLinkButton={showCopyLinkButton}/>
            <ChartManager dispatch={dispatch}
                charts={charts}
                activeChartIndex={activeChartIndex}/>
            <ScreenshotButtons dispatch={dispatch}
                chartRef={chartRef}
                screenshotState={screenshotState}/>
            <ChartShapeControls {...charts[activeChartIndex]!}
                dispatch={dispatch}/>
            {apiKeyInput}
            <SearchBox dispatch={dispatch} searchState={searchState}/>
            {searchResults}
        </Sidebar>
    )
}
