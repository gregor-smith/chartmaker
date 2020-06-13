import React, { FC } from 'react'
import { css } from 'emotion'

import { ChartManager } from './ChartManager'
import { DispatchProps } from '../reducer'
import { Chart, SearchState } from '../state'
import { APIKeyInput } from './APIKeyInput'
import { ImportExportButtons } from './ImportExportButtons'
import { SearchBox } from './SearchBox'
import { SearchResults } from './SearchResults'


type Props = DispatchProps<
    | 'UpdateActiveChart'
    | 'PromptForNewChart'
    | 'PromptToRenameActiveChart'
    | 'PromptToDeleteActiveChart'
    | 'UpdateAPIKey'
    | 'PromptToSelectImportJSON'
    | 'PromptToExportState'
    | 'UpdateSearchQuery'
    | 'SendSearchRequest'
    | 'CancelSearchRequest'
    | 'BeginDraggingAlbum'
    | 'DropSearchAlbum'
> & {
    charts: Chart[]
    activeChartName: string,
    apiKey: string
    searchState: SearchState
    draggedAlbumID: number | null
}


const style = css({
    marginRight: '1rem',
    width: '16rem'
})


export const Sidebar: FC<Props> = ({
    dispatch,
    charts,
    activeChartName,
    apiKey,
    searchState,
    draggedAlbumID
}) => {
    const searchResults = searchState.tag === 'Complete'
        ? (
            <SearchResults dispatch={dispatch}
                albums={searchState.albums}
                draggedAlbumID={draggedAlbumID}/>
        )
        : null

    return (
        <aside className={style}>
            <ChartManager dispatch={dispatch}
                charts={charts}
                activeChartName={activeChartName}/>
            <ImportExportButtons dispatch={dispatch}/>
            <APIKeyInput dispatch={dispatch} apiKey={apiKey}/>
            <SearchBox dispatch={dispatch} searchState={searchState}/>
            {searchResults}
        </aside>
    )
}
