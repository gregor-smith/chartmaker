import type { CSSProperties, FC } from 'react'

import { SidebarGroup } from './SidebarGroup.js'
import type { DispatchProps } from '../reducer.js'
import { ViewerBackButton } from './ViewerBackButton.js'
import { ViewerEditButton } from './ViewerEditButton.js'


const style: CSSProperties = {
    display: 'flex'
}


export type ViewerNavigationButtonsProps = DispatchProps & {
    importDisabled: boolean
}


export const ViewerNavigationButtons: FC<ViewerNavigationButtonsProps> = ({
    dispatch,
    importDisabled
}) => {
    let editButton: JSX.Element | undefined
    if (!importDisabled) {
        editButton = <ViewerEditButton dispatch={dispatch}/>
    }
    return (
        <SidebarGroup style={style}>
            <ViewerBackButton dispatch={dispatch}/>
            {editButton}
        </SidebarGroup>
    )
}
