import type { CSSProperties, FC } from 'react'

import type { UnidentifiedNamedAlbum } from '../types.js'
import { SidebarGroup } from './SidebarGroup.js'
import { SearchAlbumCover } from './SearchAlbumCover.js'


export type SearchResultsProps = {
    albums: UnidentifiedNamedAlbum[]
}


const containerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}


const groupStyle: CSSProperties = {
    overflowY: 'scroll'
}


export const SearchResults: FC<SearchResultsProps> = ({ albums }) => {
    const albumCovers = albums.map((album, index) =>
        <SearchAlbumCover key={index} album={album} index={index}/>
    )

    return (
        <SidebarGroup style={groupStyle}>
            <div style={containerStyle}>
                {albumCovers}
            </div>
        </SidebarGroup>
    )
}
