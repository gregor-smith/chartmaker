import type { FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { ViewerNavigationLink } from './ViewerNavigationLink.js'


export type ViewerEditButtonProps = DispatchProps


export const ViewerEditButton: FC<ViewerEditButtonProps> = ({ dispatch }) => {
    function importChart() {
        dispatch({ tag: 'ImportViewerChart' })
    }

    return (
        <ViewerNavigationLink dispatch={dispatch} onClick={importChart}>
            Edit
        </ViewerNavigationLink>
    )
}
