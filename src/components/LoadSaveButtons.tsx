import type { FC } from 'react'
import { css } from 'emotion'

import { SidebarGroup } from './SidebarGroup.js'
import type { DispatchProps } from '../reducer.js'
import { LoadStateButton } from './LoadStateButton.js'
import { SaveStateButton } from './SaveStateButton.js'


const outerStyle = css({
    display: 'flex',
    justifyContent: 'space-between'
})


const innerStyle = css({
    display: 'flex'
})


export type LoadSaveButtonsProps = DispatchProps


export const LoadSaveButtons: FC<LoadSaveButtonsProps> = ({ dispatch, children }) =>
    <SidebarGroup className={outerStyle}>
        <div className={innerStyle}>
            <LoadStateButton dispatch={dispatch}/>
            <SaveStateButton dispatch={dispatch}/>
        </div>
        {children}
    </SidebarGroup>
