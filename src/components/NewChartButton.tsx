import React, { FC } from 'react'

import { Button } from '@/components/Button'
import { useDispatch } from '@/reducer'
import { promptForNewChart } from '@/thunks'


export const NewChartButton: FC = () => {
    const dispatch = useDispatch()

    function addNewChart() {
        dispatch(promptForNewChart())
    }

    return (
        <Button onClick={addNewChart}>
            New
        </Button>
    )
}
