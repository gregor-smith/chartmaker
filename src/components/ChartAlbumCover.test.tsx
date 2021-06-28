import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { ChartAlbumCover } from './ChartAlbumCover.js'

import { fireEvent, RenderContainer } from '../test-utils/utils.js'
import type { Album } from '../types.js'
import type { Action } from '../reducer.js'
import { getAlbumID } from '../utils.js'


jest.mock('./AlbumCover.js', () => require('./AlbumCover.mock.js'))


const container = new RenderContainer()


test.each<[ Album, string, number | null ]>([
    [ { id: 1, name: 'Test album', url: 'http://test.com' }, 'Test size', 1 ],
    [ { id: 2, name: 'Test album 2', url: 'http://test2.com' }, 'Test size 2', 3 ],
    [ 1, 'Test size 3', 1 ],
    [ 1, 'Test size 4', 2 ],
])('renders album cover and dispatches action on mouse enter', (album, size, highlighted) => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <ChartAlbumCover dispatch={mock}
                album={album}
                size={size}
                highlighted={highlighted}>
            Test children
        </ChartAlbumCover>,
        container.element
    )

    expect(container.element).toMatchSnapshot()

    act(() => fireEvent('mouseEnter', container.element?.firstChild))

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'HighlightAlbum',
        targetID: getAlbumID(album)
    })
})
