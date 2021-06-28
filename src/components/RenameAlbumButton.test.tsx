import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { RenameAlbumButton } from './RenameAlbumButton.js'
import type { Action } from '../reducer.js'

import { RenderContainer, ignore, fireEvent } from '../test-utils/utils.js'


jest.mock('./AlbumActionButton.js')


const container = new RenderContainer()


test('renders album action button', () => {
    render(
        <RenameAlbumButton dispatch={ignore} id={123}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})


test('clicking dispatches action', () => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <RenameAlbumButton dispatch={mock} id={456}/>,
        container.element
    )

    act(() =>
        fireEvent(
            'click',
            container.element?.querySelector('[title="Rename"]')
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'PromptToRenameAlbum',
        id: 456
    })
})
