import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart } from '../types.js'
import { ChartSelector } from './ChartSelector.js'
import { NewChartButton } from './NewChartButton.js'
import { RenameActiveChartButton } from './RenameActiveChartButton.js'
import { DeleteActiveChartButton } from './DeleteActiveChartButton.js'
import { SidebarGroup } from './SidebarGroup.js'
import { MoveChartButton } from './MoveChartButton.js'


export type ChartManagerProps = DispatchProps & {
    charts: Chart[]
    activeChartIndex: number
}


const buttonsContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between'
}


const groupStyle: CSSProperties = {
    display: 'flex'
}


export const ChartManager: FC<ChartManagerProps> = ({
    dispatch,
    charts,
    activeChartIndex
}) =>
    <SidebarGroup>
        <ChartSelector dispatch={dispatch}
            charts={charts}
            activeChartIndex={activeChartIndex}/>
        <div style={buttonsContainerStyle}>
            <div style={groupStyle}>
                <NewChartButton dispatch={dispatch}/>
                <RenameActiveChartButton dispatch={dispatch}/>
                <DeleteActiveChartButton dispatch={dispatch}/>
            </div>
            <div style={groupStyle}>
                <MoveChartButton dispatch={dispatch}
                        direction='Up'
                        disabled={activeChartIndex === 0}>
                    ↑
                </MoveChartButton>
                <MoveChartButton dispatch={dispatch}
                        direction='Down'
                        disabled={activeChartIndex === charts.length - 1}>
                    ↓
                </MoveChartButton>
            </div>
        </div>
    </SidebarGroup>
