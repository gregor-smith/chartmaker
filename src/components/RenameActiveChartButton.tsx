import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { Button } from './Button.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'


export type RenameActiveChartButtonProps = DispatchProps


const style: CSSProperties = {
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
}


export const RenameActiveChartButton: FC<RenameActiveChartButtonProps> = ({ dispatch }) => {
    function renameActiveChart() {
        dispatch({ tag: 'PromptToRenameActiveChart' })
    }

    return (
        <Button style={style} onClick={renameActiveChart}>
            Rename
        </Button>
    )
}
