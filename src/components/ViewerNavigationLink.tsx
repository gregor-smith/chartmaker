import type { FC, MouseEvent } from 'react'
import { cx } from 'emotion'

import type { Action, DispatchProps } from '../reducer.js'
import { buttonStyle } from '../style.js'
import type { Route } from '../types.js'
import { routeToHash } from '../utils.js'


const route: Route = { tag: 'Editor' }
const action: Action = {
    tag: 'PushRoute',
    route,
    replace: false
}
const hash = routeToHash(route)


export type ViewerNavigationLinkProps = DispatchProps & {
    className?: string
    onClick?: () => void
}


export const ViewerNavigationLink: FC<ViewerNavigationLinkProps> = ({
    dispatch,
    className,
    onClick,
    children
}) => {
    function routeToEditor(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()
        onClick?.()
        dispatch(action)
    }

    return (
        <a className={cx(buttonStyle, className)}
                onClick={routeToEditor}
                href={location.pathname + hash}>
            {children}
        </a>
    )
}
