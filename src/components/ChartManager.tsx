import React, { FC } from 'react'
import { css } from 'emotion'

import { ChartSelector } from '@/components/ChartSelector'
import { NewChartButton } from '@/components/NewChartButton'
import { RenameActiveChartButton } from '@/components/RenameActiveChartButton'
import { DeleteActiveChartButton } from '@/components/DeleteActiveChartButton'
import { SidebarGroup } from '@/components/SidebarGroup'


const buttonsContainerStyle = css({
    display: 'flex'
})


export const ChartManager: FC = () =>
    <SidebarGroup>
        <ChartSelector/>
        <div className={buttonsContainerStyle}>
            <NewChartButton/>
            <RenameActiveChartButton/>
            <DeleteActiveChartButton/>
        </div>
    </SidebarGroup>
