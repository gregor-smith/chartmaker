import { h, FunctionComponent } from 'preact'

import { DispatchProps } from '../reducer'
import { Button } from './Button'


type Props = DispatchProps<'PromptToDeleteActiveChart'>


export const DeleteActiveChartButton: FunctionComponent<Props> = ({ dispatch }) => {
    function deleteActiveChart() {
        dispatch({ tag: 'PromptToDeleteActiveChart' })
    }

    return (
        <Button onClick={deleteActiveChart}>
            Delete
        </Button>
    )
}
