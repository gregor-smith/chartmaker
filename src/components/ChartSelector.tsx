import { h, FunctionComponent } from 'preact'
import { css } from 'emotion'

import { DispatchProps } from '../reducer'
import { Chart } from '../state'
import { Label } from './Label'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style'
import { ControlledSelect } from './ControlledSelect'


const id = 'chartSelector'


type Props = DispatchProps<'UpdateActiveChart'> & {
    charts: Chart[]
    activeChartIndex: number
}


const containerStyle = css({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: SIDEBAR_ITEM_PADDING_SIZE
})


export const ChartSelector: FunctionComponent<Props> = ({ dispatch, charts, activeChartIndex }) => {
    function updateActiveChart(index: number) {
        dispatch({ tag: 'UpdateActiveChart', index })
    }

    const options = charts.map((chart, index) =>
        <option key={chart.name} value={index}>
            {chart.name}
        </option>
    )

    return (
        <div class={containerStyle}>
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
