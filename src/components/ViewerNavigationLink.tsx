import type { CSSProperties, FC, MouseEvent } from 'react'

import type { Action, DispatchProps } from '../reducer.js'
import { buttonClassName } from '../style.js'
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
    style?: CSSProperties
    onClick?: () => void
}


export const ViewerNavigationLink: FC<ViewerNavigationLinkProps> = ({
    dispatch,
    style,
    onClick,
    children
}) => {
    function routeToEditor(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()
        onClick?.()
        dispatch(action)
    }

    return (
        <a className={buttonClassName()}
                style={style}
                onClick={routeToEditor}
                href={location.pathname + hash}>
            {children}
        </a>
    )
}
