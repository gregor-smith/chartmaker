import { h, FunctionComponent, JSX } from 'preact'
import { css } from 'emotion'

import { SidebarGroup } from './SidebarGroup'
import { DispatchProps } from '../reducer'
import { ControlledSlider } from './ControlledSlider'
import { ControlledRadioButton } from './ControlledRadioButton'
import { MAX_COLLAGE_ROWS_X, MAX_COLLAGE_ROWS_Y } from '../constants'
import { ChartShape } from '../state'


type Props = DispatchProps<'UpdateChartShape'> & {
    shape: ChartShape
    rowsX: number
    rowsY: number
}


const style = css({
    display: 'flex'
})


export const ChartShapeControls: FunctionComponent<Props> = ({
    dispatch,
    shape,
    rowsX,
    rowsY
}) => {
    function changeShape(shape: ChartShape) {
        dispatch({
            tag: 'UpdateChartShape',
            shape,
            rowsX,
            rowsY
        })
    }

    function switchToTop40() {
        changeShape({ tag: 'Top', size: 40 })
    }

    function switchToTop42() {
        changeShape({ tag: 'Top', size: 42 })
    }

    function switchToTop100() {
        changeShape({ tag: 'Top', size: 100 })
    }

    function switchToCollage() {
        changeShape({ tag: 'Collage' })
    }

    let rowsXSlider: JSX.Element | undefined
    let rowsYSlider: JSX.Element | undefined
    if (shape.tag === 'Collage') {
        const updateRowsX = (rowsX: number) =>
            dispatch({
                tag: 'UpdateChartShape',
                shape: { tag: 'Collage' },
                rowsX,
                rowsY
            })
        const updateRowsY = (rowsY: number) =>
            dispatch({
                tag: 'UpdateChartShape',
                shape: { tag: 'Collage' },
                rowsX,
                rowsY
            })

        rowsXSlider = (
            <ControlledSlider id='rows-x'
                    min={1}
                    max={MAX_COLLAGE_ROWS_X}
                    step={1}
                    value={rowsX}
                    onChange={updateRowsX}>
                X
            </ControlledSlider>
        )
        rowsYSlider = (
            <ControlledSlider id='rows-y'
                    min={1}
                    max={MAX_COLLAGE_ROWS_Y}
                    step={1}
                    value={rowsY}
                    onChange={updateRowsY}>
                Y
            </ControlledSlider>
        )
    }

    return (
        <SidebarGroup>
            <div class={style}>
                <ControlledRadioButton id='top40'
                        checked={shape.tag === 'Top' && shape.size === 40}
                        onCheck={switchToTop40}>
                    Top 40
                </ControlledRadioButton>
                <ControlledRadioButton id='top42'
                        checked={shape.tag === 'Top' && shape.size === 42}
                        onCheck={switchToTop42}>
                    Top 42
                </ControlledRadioButton>
                <ControlledRadioButton id='top100'
                        checked={shape.tag === 'Top' && shape.size === 100}
                        onCheck={switchToTop100}>
                    Top 40
                </ControlledRadioButton>
                <ControlledRadioButton id='collage'
                        checked={shape.tag === 'Collage'}
                        onCheck={switchToCollage}>
                    Collage
                </ControlledRadioButton>
            </div>
            {rowsXSlider}
            {rowsYSlider}
        </SidebarGroup>
    )
}
