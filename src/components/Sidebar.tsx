import React, { FC, RefObject } from 'react'
import { css } from 'emotion'

import { useSelector } from '@/reducer'
import { SIDEBAR_WIDTH, CONTAINER_PADDING_SIZE } from '@/style'
import { ChartManager } from '@/components/ChartManager'
import { APIKeyInput } from '@/components/APIKeyInput'
import { ImportExportScreenshotButtons } from '@/components/ImportExportScreenshotButtons'
import { SearchBox } from '@/components/SearchBox'
import { SearchResults } from '@/components/SearchResults'
import { ChartShapeControls } from '@/components/ChartShapeControls'


export type SidebarProps = {
    chartRef: RefObject<HTMLElement>
}


const style = css({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: SIDEBAR_WIDTH,
    height: `calc(100vh - (${CONTAINER_PADDING_SIZE} * 2))`,
    marginRight: CONTAINER_PADDING_SIZE
})


export const Sidebar: FC<SidebarProps> = ({ chartRef }) => {
    const searchState = useSelector(state => state.search)

    let searchResults: JSX.Element | undefined
    if (searchState.tag === 'Complete' && searchState.albums.length > 0) {
        searchResults = <SearchResults albums={searchState.albums}/>
    }

    return (
        <aside className={style}>
            <ChartManager/>
            <ImportExportScreenshotButtons chartRef={chartRef}/>
            <ChartShapeControls/>
            <APIKeyInput/>
            <SearchBox/>
            {searchResults}
        </aside>
    )
}
