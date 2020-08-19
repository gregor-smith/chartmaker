import React, { FC } from 'react'

import { DispatchProps } from '@/reducer'
import { AlbumActionButton } from '@/components/AlbumActionButton'


export type RenameAlbumButtonProps = DispatchProps<'PromptToRenameAlbum'> & {
    id: number
}


export const RenameAlbumButton: FC<RenameAlbumButtonProps> = ({ dispatch, id }) => {
    function rename() {
        dispatch({
            tag: 'PromptToRenameAlbum',
            id
        })
    }

    return (
        <AlbumActionButton onClick={rename} title='Rename'>
            ✏️
        </AlbumActionButton>
    )
}