import type { FC } from 'react'

import { AlbumRow as RowState, getAlbumID } from '../utils.js'
import type { DispatchProps } from '../reducer.js'
import { AlbumRowsContainer } from './AlbumRowsContainer.js'
import { EditorChartAlbumCover } from './EditorChartAlbumCover.js'
import { AlbumRow } from './AlbumRow.js'


export type EditorAlbumRowsProps = DispatchProps & {
    rows: RowState[]
    highlighted: number | null
}


export const EditorAlbumRows: FC<EditorAlbumRowsProps> = ({
    dispatch,
    rows,
    highlighted
}) => {
    const elements = rows.map(({ albums, size }, index) => {
        const covers = albums.map(album =>
            <EditorChartAlbumCover key={getAlbumID(album)}
                dispatch={dispatch}
                album={album}
                highlighted={highlighted}
                size={size}/>
        )
        return (
            <AlbumRow key={index}>
                {covers}
            </AlbumRow>
        )
    })
    return (
        <AlbumRowsContainer dispatch={dispatch}>
            {elements}
        </AlbumRowsContainer>
    )
}
