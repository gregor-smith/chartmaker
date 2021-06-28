import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'


export const id = 'titles'


export type AlbumTitlesContainerProps = DispatchProps


export const AlbumTitlesContainer: FC<AlbumTitlesContainerProps> = ({ children, dispatch }) => {
    function mouseLeave() {
        dispatch({ tag: 'UnhighlightAlbum' })
    }

    return (
        <div id={id} onMouseLeave={mouseLeave}>
            {children}
        </div>
    )
}
