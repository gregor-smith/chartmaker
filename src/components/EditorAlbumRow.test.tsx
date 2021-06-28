import { render } from 'react-dom'

import { EditorAlbumRow } from './EditorAlbumRow.js'

import { RenderContainer, ignore, createTestPlaceholderAlbums } from '../test-utils/utils.js'


jest.mock('./EditorChartAlbumCover.js')
jest.mock('./AlbumRow.js')


const container = new RenderContainer()


test('renders album row with covers', () => {
    render(
        <EditorAlbumRow dispatch={ignore}
            albums={createTestPlaceholderAlbums(5)}
            size='5rem'
            highlighted={3}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
