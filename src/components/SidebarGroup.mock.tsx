import type { FC } from 'react'
import { cx } from 'emotion'

import type { SidebarGroupProps } from './SidebarGroup.js'


export const SidebarGroup: FC<SidebarGroupProps> = ({ children, className }) => {
    className = cx('mock-sidebar-group', className)
    return (
        <div className={className}>
            {children}
        </div>
    )
}
