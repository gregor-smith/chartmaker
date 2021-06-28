import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { AlbumActionButton } from './AlbumActionButton.js'


export type DeleteAlbumButtonProps = DispatchProps & {
    id: number
}


export const DeleteAlbumButton: FC<DeleteAlbumButtonProps> = ({ dispatch, id }) => {
    function remove() {
        dispatch({ tag: 'DeleteAlbum', id })
    }

    return (
        <AlbumActionButton onClick={remove} title='Delete'>
            🗑️
        </AlbumActionButton>
    )
}
