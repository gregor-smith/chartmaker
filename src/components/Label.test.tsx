import { render } from 'react-dom'

import { Label } from './Label.js'

import { RenderContainer } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders label', () => {
    render(
        <Label target='test-target'>
            Test children
        </Label>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
