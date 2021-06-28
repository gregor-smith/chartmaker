import type { FC } from 'react'

import type { RenameAlbumButtonProps } from './RenameAlbumButton.js'


export const RenameAlbumButton: FC<RenameAlbumButtonProps> = ({ id }) =>
    <div className='mock-rename-album-button'>
        {`ID: ${id}`}
    </div>
