import React, { FC } from 'react'
import { css } from 'emotion'

import { Album, Size } from '@/types'
import { ChartAlbumCover } from '@/components/ChartAlbumCover'


export type AlbumRowProps = {
    albums: Album[]
    size: Size
}


const style = css({
    display: 'flex'
})


export const AlbumRow: FC<AlbumRowProps> = ({ albums, size }) => {
    const albumCovers = albums.map(album =>
        <ChartAlbumCover key={album.id}
            album={album}
            size={size}/>
    )
    return (
        <div className={style}>
            {albumCovers}
        </div>
    )
}
