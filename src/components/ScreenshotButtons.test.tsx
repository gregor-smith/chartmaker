import type { MutableRefObject } from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

import {
    ScreenshotButtons,
    sliderID,
    buttonID
} from './ScreenshotButtons.js'
import type { ScreenshotState } from '../types.js'
import type { Action } from '../reducer.js'

import { RenderContainer, ignore, fireEvent } from '../test-utils/utils.js'


jest.mock('./Button.js')
jest.mock('./ControlledSlider.js')
jest.mock('./SidebarGroup.js')


const container = new RenderContainer()


test.each<ScreenshotState>([
    { loading: true, scale: 1 },
    { loading: false, scale: 2 },
])('renders slider and buttons', screenshotState => {
    render(
        <ScreenshotButtons dispatch={ignore}
            chartRef={{ current: null }}
            screenshotState={screenshotState}/>,
        container.element
    )

    expect(container.element).toMatchSnapshot()
})


test('dispatches action when slider moved', () => {
    const mock = jest.fn<void, [ Action ]>()

    render(
        <ScreenshotButtons dispatch={mock}
            chartRef={{ current: null }}
            screenshotState={{ loading: false, scale: 1 }}/>,
        container.element
    )

    act(() =>
        fireEvent(
            'change',
            container.element?.querySelector(`#${sliderID}`),
            { target: { value: '3' } }
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'UpdateScreenshotScale',
        scale: 3
    })
})


test('dispatches action when screenshot button clicked', () => {
    const mock = jest.fn<void, [ Action ]>()
    const ref: MutableRefObject<HTMLElement> = {
        current: container.element!
    }

    render(
        <ScreenshotButtons dispatch={mock}
            chartRef={ref}
            screenshotState={{ loading: false, scale: 1 }}/>,
        container.element
    )

    act(() =>
        fireEvent(
            'click',
            container.element?.querySelector(`#${buttonID}`)
        )
    )

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith<[ Action ]>({
        tag: 'TakeScreenshot',
        element: container.element!
    })
})
