import React, { FC } from 'react'

import { useDispatch } from '@/reducer'
import { AlbumActionButton } from '@/components/AlbumActionButton'


export type DeleteAlbumButtonProps = {
    id: number
}


export const DeleteAlbumButton: FC<DeleteAlbumButtonProps> = ({ id }) => {
    const dispatch = useDispatch()

    function remove() {
        dispatch({ type: 'DeleteAlbum', id })
    }

    return (
        <AlbumActionButton onClick={remove} title='Delete'>
            🗑️
        </AlbumActionButton>
    )
}
