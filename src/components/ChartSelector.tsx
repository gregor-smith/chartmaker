import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart } from '../types.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { Label } from './Label.js'
import { ControlledSelect } from './ControlledSelect.js'


export const id = 'chartSelector'


export type ChartSelectorProps = DispatchProps & {
    charts: Chart[]
    activeChartIndex: number
}


const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: SIDEBAR_ITEM_PADDING_SIZE
}


export const ChartSelector: FC<ChartSelectorProps> = ({
    dispatch,
    charts,
    activeChartIndex
}) => {
    function updateActiveChart(index: number) {
        dispatch({
            tag: 'UpdateActiveChart',
            index
        })
    }

    const options = charts.map((chart, index) =>
        <option key={chart.name} value={index}>
            {chart.name}
        </option>
    )

    return (
        <div style={containerStyle}>
            <Label target={id}>
                Active chart
            </Label>
            <ControlledSelect id={id}
                    value={activeChartIndex}
                    onChange={updateActiveChart}>
                {options}
            </ControlledSelect>
        </div>
    )
}
