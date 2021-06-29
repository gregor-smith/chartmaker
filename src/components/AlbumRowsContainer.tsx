import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { CONTAINER_PADDING_SIZE } from '../style.js'


export const id = 'rows'


const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: CONTAINER_PADDING_SIZE
}


export type AlbumRowsContainerProps = DispatchProps


export const AlbumRowsContainer: FC<AlbumRowsContainerProps> = ({ dispatch, children }) => {
    function mouseLeave() {
        dispatch({ tag: 'UnhighlightAlbum' })
    }

    return (
        <div id={id} style={style} onMouseLeave={mouseLeave}>
            {children}
        </div>
    )
}
