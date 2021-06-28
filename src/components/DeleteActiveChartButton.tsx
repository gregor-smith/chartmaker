import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { Button } from './Button.js'


export type DeleteActiveChartButtonProps = DispatchProps


export const DeleteActiveChartButton: FC<DeleteActiveChartButtonProps> = ({ dispatch }) => {
    function deleteActiveChart() {
        dispatch({ tag: 'PromptToDeleteActiveChart' })
    }

    return (
        <Button onClick={deleteActiveChart}>
            Delete
        </Button>
    )
}
