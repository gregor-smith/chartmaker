import React, { FC } from 'react'
import { css } from 'emotion'

import { Button } from '@/components/Button'
import { SIDEBAR_ITEM_PADDING_SIZE } from '@/style'
import { useDispatch } from '@/reducer'
import { promptToRenameActiveChart } from '@/thunks'


const style = css({
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
})


export const RenameActiveChartButton: FC = () => {
    const dispatch = useDispatch()

    function renameActiveChart() {
        dispatch(promptToRenameActiveChart())
    }

    return (
        <Button className={style} onClick={renameActiveChart}>
            Rename
        </Button>
    )
}
