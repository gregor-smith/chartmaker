import type { CSSProperties, FC } from 'react'

import { SidebarGroup } from './SidebarGroup.js'
import type { DispatchProps } from '../reducer.js'
import { LoadStateButton } from './LoadStateButton.js'
import { SaveStateButton } from './SaveStateButton.js'


const outerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between'
}


const innerStyle: CSSProperties = {
    display: 'flex'
}


export type LoadSaveButtonsProps = DispatchProps


export const LoadSaveButtons: FC<LoadSaveButtonsProps> = ({ dispatch, children }) =>
    <SidebarGroup style={outerStyle}>
        <div style={innerStyle}>
            <LoadStateButton dispatch={dispatch}/>
            <SaveStateButton dispatch={dispatch}/>
        </div>
        {children}
    </SidebarGroup>
