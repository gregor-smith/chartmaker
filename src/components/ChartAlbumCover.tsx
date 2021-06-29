import type { CSSProperties, FC } from 'react'

import { ALBUM_BUTTONS_PADDING_SIZE } from '../style.js'
import { AlbumCover, AlbumCoverProps } from './AlbumCover.js'
import type { Album } from '../types.js'
import type { DispatchProps } from '../reducer.js'
import { getAlbumID, identifiedAlbumIsPlaceholder } from '../utils.js'


const overlayStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: ALBUM_BUTTONS_PADDING_SIZE
}


export type ChartAlbumCoverProps =
    & DispatchProps
    & Omit<AlbumCoverProps, 'overlayClass' | 'album' | 'onMouseEnter' | 'highlighted'>
    & {
        album: Album
        highlighted: number | null
    }


export const ChartAlbumCover: FC<ChartAlbumCoverProps> = ({
    dispatch,
    album,
    highlighted,
    ...props
}) => {
    const id = getAlbumID(album)

    function mouseEnter() {
        dispatch({
            tag: 'HighlightAlbum',
            targetID: id
        })
    }

    return (
        <AlbumCover {...props}
            highlighted={highlighted === null
                ? undefined
                : id === highlighted}
            album={identifiedAlbumIsPlaceholder(album) ? null : album}
            overlayStyle={overlayStyle}
            onMouseEnter={mouseEnter}/>
    )
}
