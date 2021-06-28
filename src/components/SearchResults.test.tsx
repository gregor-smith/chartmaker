import { render } from 'react-dom'

import { SearchResults } from './SearchResults.js'

import { RenderContainer, createTestNamedAlbums } from '../test-utils/utils.js'


jest.mock('./SidebarGroup.js')
jest.mock('./SearchAlbumCover.js')


const container = new RenderContainer()


test('renders album covers', () => {
    render(
        <SearchResults albums={createTestNamedAlbums(5)}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
