import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import type { Chart } from '../types.js'
import { ChartSelector, id } from './ChartSelector.js'
import type { Action } from '../reducer.js'

import { RenderContainer, fireEvent } from '../test-utils/utils.js'


jest.mock('./Label.js', () => require('./Label.mock.js'))
jest.mock('./ControlledSelect.js', () => require('./ControlledSelect.mock.js'))


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


test.each([ 0, 1 ])('renders labelled select, change event dispatches action', index => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <ChartSelector dispatch={mock}
            charts={charts}
            activeChartIndex={123}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()

    act(() =>
        fireEvent(
            'change',
            container.element?.querySelector(`#${id}`),
            { target: { value: String(index) } }
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'UpdateActiveChart',
        index
    })
})
