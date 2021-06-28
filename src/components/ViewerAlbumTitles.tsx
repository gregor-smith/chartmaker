import type { FC } from 'react'

import type { NamedAlbum } from '../types.js'
import type { DispatchProps } from '../reducer.js'
import { AlbumTitle } from './AlbumTitle.js'
import { AlbumTitleGroup } from './AlbumTitleGroup.js'
import { AlbumTitlesContainer } from './AlbumTitlesContainer.js'


export type ViewerAlbumTitlesProps = DispatchProps & {
    groups: NamedAlbum[][]
    highlighted: number | null
}


export const ViewerAlbumTitles: FC<ViewerAlbumTitlesProps> = ({
    dispatch,
    groups,
    highlighted
}) => {
    const elements = groups.map((group, index) => {
        const titles = group.map(({ id, name }) =>
            <AlbumTitle key={id}
                dispatch={dispatch}
                id={id}
                name={name}
                highlighted={highlighted}/>
        )
        return (
            <AlbumTitleGroup key={index}>
                {titles}
            </AlbumTitleGroup>
        )
    })
    return (
        <AlbumTitlesContainer dispatch={dispatch}>
            {elements}
        </AlbumTitlesContainer>
    )
}
