import type { FC } from 'react'

import type { NamedAlbum } from '../types.js'
import type { DispatchProps } from '../reducer.js'
import { AlbumTitlesContainer } from './AlbumTitlesContainer.js'
import { AlbumTitle } from './AlbumTitle.js'
import { RenameAlbumButton } from './RenameAlbumButton.js'
import { DeleteAlbumButton } from './DeleteAlbumButton.js'
import { AlbumTitleGroup } from './AlbumTitleGroup.js'


export type EditorAlbumTitlesProps = DispatchProps & {
    groups: NamedAlbum[][]
    highlighted: number | null
}


export const EditorAlbumTitles: FC<EditorAlbumTitlesProps> = ({
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
                    highlighted={highlighted}>
                <RenameAlbumButton dispatch={dispatch} id={id}/>
                <DeleteAlbumButton dispatch={dispatch} id={id}/>
            </AlbumTitle>
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
