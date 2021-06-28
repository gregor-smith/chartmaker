import { render } from 'react-dom'

import { AlbumTitleGroup } from './AlbumTitleGroup.js'

import { RenderContainer } from '../test-utils/utils.js'


jest.mock('./AlbumTitle.js', () => require('./AlbumTitle.mock.js'))


const container = new RenderContainer()


test('renders styled children', () => {
    render(
        <AlbumTitleGroup>
            Test children
        </AlbumTitleGroup>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
