import React, { FC, DragEvent } from 'react'

import { NamedAlbum, Size } from '../types'
import AlbumCover from './AlbumCover'


type Props = {
    album: NamedAlbum
    size: Size
}


const SearchAlbumCover: FC<Props> = ({ album, size }) => {
    function dragStart(event: DragEvent<HTMLDivElement>) {
        event.dataTransfer.setData(`search-${album.id}`, '')
        event.dataTransfer.effectAllowed = 'copy'
    }

    return (
        <AlbumCover album={album}
            size={size}
            onDragStart={dragStart}/>
    )
}


export default SearchAlbumCover
