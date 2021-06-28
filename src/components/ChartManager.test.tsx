import { render } from 'react-dom'

import { ChartManager } from './ChartManager.js'
import type { Chart } from '../types.js'

import { RenderContainer, ignore } from '../test-utils/utils.js'


jest.mock('./SidebarGroup.js', () => require('./SidebarGroup.mock.js'))
jest.mock('./ChartSelector.js', () => require('./ChartSelector.mock.js'))
jest.mock('./NewChartButton.js', () => require('./NewChartButton.mock.js'))
jest.mock('./RenameActiveChartButton.js', () => require('./RenameActiveChartButton.mock.js'))
jest.mock('./DeleteActiveChartButton.js', () => require('./DeleteActiveChartButton.mock.js'))
jest.mock('./MoveChartButton.js', () => require('./MoveChartButton.mock.js'))


const container = new RenderContainer()


const charts: Chart[] = [
    {
        name: 'test chart 1',
        shape: [ 5, 5 ],
        size: null,
        // this component doesn't touch the albums at all so no need to
        // actually pass any
        albums: []
    },
    {
        name: 'test chart 2',
        shape: [ 10, 10 ],
        size: 100,
        albums: []
    },
    {
        name: 'test chart 3',
        shape: [ 7, 7 ],
        size: 42,
        albums: []
    }
]


test.each([ 0, 1, 2 ])('renders chart selector and buttons', activeChartIndex => {
    render(
        <ChartManager dispatch={ignore}
            activeChartIndex={activeChartIndex}
            charts={charts}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
