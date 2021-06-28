import { render } from 'react-dom'

import type { AlbumRow } from '../utils.js'
import type { Album } from '../types.js'
import { EditorAlbumRows } from './EditorAlbumRows.js'

import { createTestNamedAlbums, createTestPlaceholderAlbums, ignore, RenderContainer } from '../test-utils/utils.js'


jest.mock('./EditorAlbumRow.js')
jest.mock('./AlbumRowsContainer.js')


const container = new RenderContainer()


test.each<[ AlbumRow<Album>[], number | undefined ]>([
    [
        [
            {
                albums: createTestNamedAlbums(3),
                size: '1rem'
            },
            {
                albums: createTestPlaceholderAlbums(5, 4),
                size: '2rem'
            }
        ],
        1
    ],
    [
        [
            {
                albums: createTestPlaceholderAlbums(3),
                size: '3rem'
            },
            {
                albums: createTestNamedAlbums(4, 4),
                size: '2rem'
            },
            {
                albums: createTestPlaceholderAlbums(2, 8),
                size: '1rem'
            }
        ],
        undefined
    ]
])('renders container and rows', (rows, highlighted) => {
    render(
        <EditorAlbumRows dispatch={ignore}
            rows={rows}
            highlighted={highlighted}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
