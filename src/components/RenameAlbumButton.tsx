import React, { FC } from 'react'

import { useDispatch } from '@/reducer'
import { AlbumActionButton } from '@/components/AlbumActionButton'
import { promptToRenameAlbum } from '@/thunks'


export type RenameAlbumButtonProps = {
    id: number
}


export const RenameAlbumButton: FC<RenameAlbumButtonProps> = ({ id }) => {
    const dispatch = useDispatch()

    function rename() {
        dispatch(promptToRenameAlbum(id))
    }

    return (
        <AlbumActionButton onClick={rename} title='Rename'>
            ✏️
        </AlbumActionButton>
    )
}
