import type { FC } from 'react'

import type { SidebarGroupProps } from './SidebarGroup.js'


export const SidebarGroup: FC<SidebarGroupProps> = ({ children, style }) =>
    <div className='mock-sidebar-group' style={style}>
        {children}
    </div>
