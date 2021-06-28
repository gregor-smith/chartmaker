import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { SaveStateButton } from './SaveStateButton.js'
import type { Action } from '../reducer.js'

import { RenderContainer, ignore, fireEvent } from '../test-utils/utils.js'


jest.mock('./Button.js')


const container = new RenderContainer()


test('renders button', () => {
    render(
        <SaveStateButton dispatch={ignore}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})


test('dispatches action when clicked', () => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <SaveStateButton dispatch={mock}/>,
        container.element
    )

    act(() => fireEvent('click', container.element?.firstChild))

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'PromptToSaveState'
    })
})
