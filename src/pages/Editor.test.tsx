import { render } from 'react-dom'

import type { State } from '../types.js'
import { Editor } from './Editor.js'

import {
    RenderContainer,
    ignore,
    createTestPlaceholderAlbums,
    createTestNamedAlbums
} from '../test-utils/utils.js'


jest.mock('./components/EditorSidebar.js')
jest.mock('./components/EditorChart.js')


const container = new RenderContainer()


test('renders sidebar and chart', () => {
    const state: Omit<State, 'version' | 'viewing'> = {
        charts: [
            {
                name: 'Test chart 1',
                rowsX: 10,
                rowsY: 10,
                shape: { tag: 'Top', size: 40 },
                albums: createTestPlaceholderAlbums(10)
            },
            {
                name: 'Test chart 2',
                rowsX: 3,
                rowsY: 3,
                shape: { tag: 'Collage' },
                albums: createTestPlaceholderAlbums(10, 10)
            }
        ],
        apiKey: 'Test api key',
        screenshot: {
            loading: false,
            scale: 2
        },
        search: {
            tag: 'Complete',
            query: 'Test search query',
            albums: createTestNamedAlbums(5, 20)
        },
        activeChartIndex: 1,
        highlightedID: 5
    }

    render(
        <Editor {...state}
            chartRef={{ current: null }}
            dispatch={ignore}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
