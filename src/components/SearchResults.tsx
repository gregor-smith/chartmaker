import type { FC } from 'react'
import { css } from 'emotion'

import type { UnidentifiedNamedAlbum } from '../types.js'
import { SidebarGroup } from './SidebarGroup.js'
import { SearchAlbumCover } from './SearchAlbumCover.js'


export type SearchResultsProps = {
    albums: UnidentifiedNamedAlbum[]
}


const containerStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
})


const groupStyle = css({
    overflowY: 'scroll'
})


export const SearchResults: FC<SearchResultsProps> = ({ albums }) => {
    const albumCovers = albums.map((album, index) =>
        <SearchAlbumCover key={index} album={album} index={index}/>
    )

    return (
        <SidebarGroup className={groupStyle}>
            <div className={containerStyle}>
                {albumCovers}
            </div>
        </SidebarGroup>
    )
}
