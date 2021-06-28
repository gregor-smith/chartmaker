import { render } from 'react-dom'

import { Sidebar } from './Sidebar.js'

import { RenderContainer } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders styled aside', () => {
    render(
        <Sidebar>
            Test children
        </Sidebar>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
