import type { CSSProperties, FC } from 'react'
import { css } from 'emotion'

import { BORDER, CONTAINER_PADDING_SIZE } from '../style.js'


export type SidebarGroupProps = {
    style?: CSSProperties
}


export const SidebarGroup: FC<SidebarGroupProps> = ({ children, style }) => {
    const className = css({
        ':first-of-type': {
            borderTop: BORDER,
            paddingTop: CONTAINER_PADDING_SIZE
        },
        ':not(:last-of-type)': {
            borderBottom: BORDER,
            paddingBottom: CONTAINER_PADDING_SIZE,
            marginBottom: CONTAINER_PADDING_SIZE
        }
    })
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}
