import React from 'react'
import { render } from 'react-dom'

import { ChartManager } from '@/components/ChartManager'
import { Chart } from '@/types'

import { RenderContainer, ignore } from '../utils'


jest.mock('@/components/ChartSelector')
jest.mock('@/components/NewChartButton')
jest.mock('@/components/RenameActiveChartButton')
jest.mock('@/components/DeleteActiveChartButton')


const container = new RenderContainer()


test('renders chart selector and buttons', () => {
    const charts: Chart[] = [
        {
            name: 'test chart 1',
            rowsX: 5,
            rowsY: 5,
            shape: { tag: 'Collage' },
            // this component doesn't touch the albums at all so no need to
            // actually pass any
            albums: []
        },
        {
            name: 'test chart 2',
            rowsX: 10,
            rowsY: 10,
            shape: { tag: 'Top', size: 100 },
            albums: []
        },
        {
            name: 'test chart 3',
            rowsX: 10,
            rowsY: 10,
            shape: { tag: 'Top', size: 42 },
            albums: []
        }
    ]

    render(
        <ChartManager dispatch={ignore}
            activeChartIndex={1}
            charts={charts}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})
