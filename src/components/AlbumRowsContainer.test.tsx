import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { AlbumRowsContainer, id } from './AlbumRowsContainer.js'
import type { Action } from '../reducer.js'

import { fireEvent, RenderContainer } from '../test-utils/utils.js'


const container = new RenderContainer()


test('renders children and dispatches on mouse leave', () => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <AlbumRowsContainer dispatch={mock}>
            Test children
        </AlbumRowsContainer>,
        container.element
    )

    expect(container.element).toMatchSnapshot()

    act(() => fireEvent('mouseLeave', container.element?.querySelector(`#${id}`)))

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'UnhighlightAlbum'
    })
})
