import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { AlbumRow as RowState, getAlbumID } from '../utils.js'
import { AlbumRowsContainer } from './AlbumRowsContainer.js'
import { ChartAlbumCover } from './ChartAlbumCover.js'
import { AlbumRow } from './AlbumRow.js'


export type ViewerAlbumRowsProps = DispatchProps & {
    rows: RowState[]
    highlighted: number | null
}


export const ViewerAlbumRows: FC<ViewerAlbumRowsProps> = ({
    dispatch,
    rows,
    highlighted
}) => {
    const elements = rows.map(({ albums, size }, index) => {
        const covers = albums.map(album =>
            <ChartAlbumCover key={getAlbumID(album)}
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
