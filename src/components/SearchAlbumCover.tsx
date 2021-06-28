import type { FC, DragEvent } from 'react'

import type { UnidentifiedNamedAlbum } from '../types.js'
import { AlbumCover } from './AlbumCover.js'
import { SMALL_ALBUM_SIZE } from '../style.js'


export type SearchAlbumCoverProps = {
    album: UnidentifiedNamedAlbum
    index: number
}


export const SearchAlbumCover: FC<SearchAlbumCoverProps> = ({ album, index }) => {
    function dragStart(event: DragEvent<HTMLDivElement>) {
        event.dataTransfer.setData(`search-${index}`, '')
        event.dataTransfer.effectAllowed = 'copy'
    }

    return (
        <AlbumCover album={album}
            size={SMALL_ALBUM_SIZE}
            onDragStart={dragStart}/>
    )
}
