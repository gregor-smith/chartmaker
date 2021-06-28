import { render } from 'react-dom'

import { SidebarGroup } from './SidebarGroup.js'

import { RenderContainer } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders styled div', () => {
    render(
        <SidebarGroup className='test-sidebar-group'>
            Test children
        </SidebarGroup>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
