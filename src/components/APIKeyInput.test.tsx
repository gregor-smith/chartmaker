import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { APIKeyInput, id } from './APIKeyInput.js'
import type { Action } from '../reducer.js'

import { RenderContainer, fireEvent } from '../test-utils/utils.js'


jest.mock('./SidebarGroup.js', () => require('./SidebarGroup.mock.js'))
jest.mock('./Label.js', () => require('./Label.mock.js'))
jest.mock('./ControlledInput.js', () => require('./ControlledInput.mock.js'))


const container = new RenderContainer()


test('renders labelled input and dispatches action on input change', () => {
    const mock = jest.fn<void, [ Action ]>()
    render(
        <APIKeyInput dispatch={mock} apiKey='test api key'/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()

    act(() =>
        fireEvent(
            'change',
            container.element?.querySelector(`#${id}`),
            { target: { value: 'test new api key' } }
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'UpdateAPIKey',
        apiKey: 'test new api key'
    })
})
