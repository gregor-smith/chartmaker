import type { FC } from 'react'

import type { ScreenshotButtonsProps } from './ScreenshotButtons.js'


export const ScreenshotButtons: FC<ScreenshotButtonsProps> = ({
    screenshotState
}) => {
    const json = JSON.stringify(screenshotState)
    return (
        <div className='mock-screenshot-buttons'>
            {`Screenshot state: ${json}`}
        </div>
    )
}
