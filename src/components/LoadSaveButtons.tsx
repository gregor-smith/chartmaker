import type { FC } from 'react'
import { css } from 'emotion'

import { SidebarGroup } from './SidebarGroup.js'
import type { DispatchProps } from '../reducer.js'
import { LoadStateButton } from './LoadStateButton.js'
import { SaveStateButton } from './SaveStateButton.js'
import { CopyLinkButton } from './CopyLinkButton.js'
import type { Chart } from '../types.js'


const outerStyle = css({
    display: 'flex',
    justifyContent: 'space-between'
})


const innerStyle = css({
    display: 'flex'
})


export type LoadSaveButtonsProps = DispatchProps & {
    chart: Chart
    showCopyLinkButton: boolean
}


export const LoadSaveButtons: FC<LoadSaveButtonsProps> = ({
    dispatch,
    chart,
    showCopyLinkButton
}) => {
    let copyLinkButton: JSX.Element | undefined
    if (showCopyLinkButton) {
        copyLinkButton = <CopyLinkButton chart={chart}/>
    }

    return (
        <SidebarGroup className={outerStyle}>
            <div className={innerStyle}>
                <LoadStateButton dispatch={dispatch}/>
                <SaveStateButton dispatch={dispatch}/>
            </div>
            {copyLinkButton}
        </SidebarGroup>
    )
}
