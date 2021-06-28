import { render } from 'react-dom'

import { EditorAlbumTitleGroup } from './EditorAlbumTitleGroup.js'

import { RenderContainer, ignore, createTestNamedAlbums } from '../test-utils/utils.js'


jest.mock('./EditorAlbumTitle.js')
jest.mock('./AlbumTitleGroup.js')


const container = new RenderContainer()


test.each([ 123, undefined ])('renders group with titles', highlighted => {
    render(
        <EditorAlbumTitleGroup dispatch={ignore}
            group={createTestNamedAlbums(3)}
            highlighted={highlighted}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
