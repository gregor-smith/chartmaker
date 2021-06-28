import type { FC } from 'react'

import type { MoveChartButtonProps } from './MoveChartButton.js'


export const MoveChartButton: FC<MoveChartButtonProps> = ({ direction, disabled, children }) =>
    <div className='mock-move-chart-button'>
        {`Disabled: ${disabled}`}
        {`Direction: ${direction}`}
        {children}
    </div>
