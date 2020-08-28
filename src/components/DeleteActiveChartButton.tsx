import React, { FC } from 'react'

import { Button } from '@/components/Button'
import { useDispatch } from '@/reducer'
import { promptToDeleteActiveChart } from '@/thunks'


export const DeleteActiveChartButton: FC = () => {
    const dispatch = useDispatch()

    function deleteActiveChart() {
        dispatch(promptToDeleteActiveChart())
    }

    return (
        <Button onClick={deleteActiveChart}>
            Delete
        </Button>
    )
}
