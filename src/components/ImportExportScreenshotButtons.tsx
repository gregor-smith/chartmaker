import React, { FC, RefObject } from 'react'
import { css } from 'emotion'

import { MAX_SCREENSHOT_SCALE } from '@/constants'
import { ControlledSlider } from '@/components/ControlledSlider'
import { SidebarGroup } from '@/components/SidebarGroup'
import { Button } from '@/components/Button'
import { ImportStateButton } from '@/components/ImportStateButton'
import { ExportStateButton } from '@/components/ExportStateButton'
import { useDispatch, useSelector } from '@/reducer'
import { takeScreenshot } from '@/thunks'


export const sliderID = 'screenshotScale'
export const buttonID = 'screenshot'


export type ImportExportScreenshotButtonsProps = {
    chartRef: RefObject<HTMLElement>
}


const stateButtonsContainerStyle = css({
    display: 'flex'
})


const buttonContainerStyle = css({
    display: 'flex',
    justifyContent: 'space-between'
})


export const ImportExportScreenshotButtons: FC<ImportExportScreenshotButtonsProps> = ({ chartRef }) => {
    const dispatch = useDispatch()
    const { loading, scale } = useSelector(state => state.screenshot)

    function updateScreenshotScale(scale: number) {
        dispatch({ type: 'UpdateScreenshotScale', scale })
    }

    function dispatchTakeScreenshot() {
        if (chartRef.current == null) {
            return
        }
        dispatch(takeScreenshot(chartRef.current))
    }

    return (
        <SidebarGroup>
            <ControlledSlider id={sliderID}
                    disabled={loading}
                    value={scale}
                    onChange={updateScreenshotScale}
                    min={1}
                    max={MAX_SCREENSHOT_SCALE}
                    step={1}>
                Scale
            </ControlledSlider>
            <div className={buttonContainerStyle}>
                <Button id={buttonID} onClick={dispatchTakeScreenshot} disabled={loading}>
                    Screenshot
                </Button>
                <div className={stateButtonsContainerStyle}>
                    <ImportStateButton/>
                    <ExportStateButton/>
                </div>
            </div>
        </SidebarGroup>
    )
}
