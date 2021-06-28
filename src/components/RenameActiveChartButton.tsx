import type { FC } from 'react'
import { css } from 'emotion'

import type { DispatchProps } from '../reducer.js'
import { Button } from './Button.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'


export type RenameActiveChartButtonProps = DispatchProps


const style = css({
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
})


export const RenameActiveChartButton: FC<RenameActiveChartButtonProps> = ({ dispatch }) => {
    function renameActiveChart() {
        dispatch({ tag: 'PromptToRenameActiveChart' })
    }

    return (
        <Button className={style} onClick={renameActiveChart}>
            Rename
        </Button>
    )
}
