import React, { FC } from 'react'

import { Button } from '@/components/Button'
import { useDispatch } from '@/reducer'
import { promptToExportState } from '@/thunks'


export const ExportStateButton: FC = () => {
    const dispatch = useDispatch()

    function dispatchPromptToExportState() {
        dispatch(promptToExportState())
    }

    return (
        <Button onClick={dispatchPromptToExportState}>
            Export state
        </Button>
    )
}
