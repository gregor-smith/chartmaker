import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { ControlledForm } from './ControlledForm.js'

import { RenderContainer, ignore, fireEvent } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders form', () => {
    render(
        <ControlledForm onSubmit={ignore}>
            Test children
        </ControlledForm>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})


test('submit calls onSubmit prop', () => {
    const mock = jest.fn<void, []>()

    render(
        <ControlledForm onSubmit={mock}/>,
        container.element
    )

    act(() =>
        fireEvent(
            'submit',
            container.element?.querySelector('form')
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
})
