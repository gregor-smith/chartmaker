import type { FC } from 'react'

import type { DeleteAlbumButtonProps } from './DeleteAlbumButton.js'


export const DeleteAlbumButton: FC<DeleteAlbumButtonProps> = ({ id }) =>
    <div className='mock-delete-album-button'>
        {`ID: ${id}`}
    </div>
