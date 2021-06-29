import type { CSSProperties, FC } from 'react'

import { SIDEBAR_WIDTH, CONTAINER_PADDING_SIZE } from '../style.js'


const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: SIDEBAR_WIDTH,
    height: `calc(100vh - (${CONTAINER_PADDING_SIZE} * 2))`,
    marginRight: CONTAINER_PADDING_SIZE
}


export const Sidebar: FC = ({ children }) =>
    <aside style={style}>
        {children}
    </aside>
