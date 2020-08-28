import React, { FC } from 'react'
import { css } from 'emotion'

import { TITLES_PADDING_SIZE, TITLES_FONT_SIZE } from '@/style'
import { NamedAlbum } from '@/types'
import { AlbumTitle } from '@/components/AlbumTitle'


const style = css({
    marginBottom: TITLES_PADDING_SIZE,
    fontSize: TITLES_FONT_SIZE
})


export type AlbumTitleGroupProps = {
    albums: NamedAlbum[]
}


export const AlbumTitleGroup: FC<AlbumTitleGroupProps> = ({ albums }) => {
    const titles = albums.map((album, index) =>
        <AlbumTitle key={index} id={album.id}>
            {album.name}
        </AlbumTitle>
    )

    return (
        <div className={style}>
            {titles}
        </div>
    )
}
