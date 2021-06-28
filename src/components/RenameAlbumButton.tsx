import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { AlbumActionButton } from './AlbumActionButton.js'


export type RenameAlbumButtonProps = DispatchProps & {
    id: number
}


export const RenameAlbumButton: FC<RenameAlbumButtonProps> = ({ dispatch, id }) => {
    function rename() {
        dispatch({ tag: 'PromptToRenameAlbum', id })
    }

    return (
        <AlbumActionButton onClick={rename} title='Rename'>
            ✏️
        </AlbumActionButton>
    )
}
