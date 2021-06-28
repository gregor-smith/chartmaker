import { render } from 'react-dom'

import { EditorAlbumTitle } from './EditorAlbumTitle.js'
import type { NamedAlbum } from '../types.js'

import { RenderContainer, ignore } from '../test-utils/utils.js'


jest.mock('./AlbumTitle.js')
jest.mock('./RenameAlbumButton.js')
jest.mock('./DeleteAlbumButton.js')


const container = new RenderContainer()


test.each([ undefined, 123, 456 ])('renders title and buttons', highlighted => {
    const album: NamedAlbum = {
        id: 123,
        name: 'Test album',
        url: 'http://test.com'
    }
    render(
        <EditorAlbumTitle dispatch={ignore} album={album} highlighted={highlighted}>
            Test children
        </EditorAlbumTitle>,
        container.element
    )
    expect(container.element).toMatchSnapshot()
})
