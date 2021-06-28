import { render } from 'react-dom'

import type { SearchState, Chart } from '../types.js'
import { EditorSidebar } from './EditorSidebar.js'

import { RenderContainer, ignore, createTestNamedAlbums } from '../test-utils/utils.js'


jest.mock('./ChartManager.js')
jest.mock('./ImportExportScreenshotButtons.js')
jest.mock('./ChartShapeControls.js')
jest.mock('./APIKeyInput.js')
jest.mock('./SearchBox.js')
jest.mock('./SearchResults.js')
jest.mock('./Sidebar.js')


const container = new RenderContainer()


test.each<SearchState>([
    {
        tag: 'Waiting',
        query: 'Test query'
    },
    {
        tag: 'Loading',
        query: 'Test query',
        // does not affect rendering in any way so can be left out
        controller: undefined as any
    },
    {
        tag: 'Error',
        query: 'Test query',
        message: 'Test error'
    },
    {
        tag: 'Complete',
        query: 'Test query',
        albums: []
    },
    {
        tag: 'Complete',
        query: 'Test query',
        albums: createTestNamedAlbums(5)
    },
])('renders groups with no search results unless complete and album present', searchState => {
    const charts: Chart[] = [
        {
            name: 'Test chart 1',
            rowsX: 10,
            rowsY: 10,
            shape: { tag: 'Top', size: 40 },
            // chart albums don't affect rendering so can be left out
            albums: []
        },
        {
            name: 'Test chart 2',
            rowsX: 3,
            rowsY: 7,
            shape: { tag: 'Collage' },
            albums: []
        },
    ]

    render(
        <EditorSidebar dispatch={ignore}
            charts={charts}
            activeChartIndex={1}
            apiKey='Test api key'
            searchState={searchState}
            screenshotState={{ loading: false, scale: 2 }}
            chartRef={{ current: null }}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
