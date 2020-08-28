import React, { FC, useRef, useEffect } from 'react'
import { css } from 'emotion'

import { useSelector } from '@/reducer'
import {
    BACKGROUND_COLOUR,
    TEXT_COLOUR,
    FONT_SIZE,
    CONTAINER_PADDING_SIZE
} from '@/style'
import { Chart } from '@/components/Chart'
import { Sidebar } from '@/components/Sidebar'
import { saveStateToLocalStorage } from '@/state'


const rootStyle = css({
    display: 'flex',
    alignItems: 'start',
    minHeight: '100vh',
    minWidth: 'max-content',
    background: BACKGROUND_COLOUR,
    color: TEXT_COLOUR,
    fontSize: FONT_SIZE,
    padding: CONTAINER_PADDING_SIZE
})


export const App: FC = () => {
    const chartRef = useRef<HTMLElement>(null)
    const state = useSelector(state => state)

    useEffect(
        () => saveStateToLocalStorage(state),
        [ state ]
    )

    return (
        <div className={rootStyle}>
            <Sidebar chartRef={chartRef}/>
            <Chart innerRef={chartRef}/>
        </div>
    )
}
