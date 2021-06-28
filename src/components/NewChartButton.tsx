import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { Button } from './Button.js'


export type NewChartButtonProps = DispatchProps


export const NewChartButton: FC<NewChartButtonProps> = ({ dispatch }) => {
    function addNewChart() {
        dispatch({ tag: 'PromptForNewChart' })
    }

    return (
        <Button onClick={addNewChart}>
            New
        </Button>
    )
}
