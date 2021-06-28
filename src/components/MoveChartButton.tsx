import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { Button } from './Button.js'


export type MoveChartButtonProps = DispatchProps & {
    direction: 'Up' | 'Down'
    disabled: boolean
}


export const MoveChartButton: FC<MoveChartButtonProps> = ({
    dispatch,
    direction,
    disabled,
    children
}) => {
    function moveChart() {
        dispatch({ tag: 'MoveActiveChart', direction })
    }

    return (
        <Button disabled={disabled} onClick={moveChart} title={direction}>
            {children}
        </Button>
    )
}
