import { render } from 'react-dom'

import { AlbumRow } from './AlbumRow.js'

import { RenderContainer } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders styled container and children', () => {
    render(
        <AlbumRow>
            Test children
        </AlbumRow>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
