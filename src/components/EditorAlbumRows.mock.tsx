import type { FC } from 'react'

import type { EditorAlbumRowsProps } from './EditorAlbumRows.js'


export const EditorAlbumRows: FC<EditorAlbumRowsProps> = ({
    rows,
    highlighted
}) => {
    const json = JSON.stringify(rows)
    return (
        <div className='mock-editor-album-rows'>
            {`Rows: ${json}`}
            {`Highlighted: ${highlighted}`}
        </div>
    )
}
