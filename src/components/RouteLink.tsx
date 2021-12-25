import type { EventHandler, MouseEvent, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Route } from '../types.js'
import { routeToHash } from '../utils.js'


export type RouteLinkProps = DispatchProps & {
    route: Route
    onClick?: () => void
}


export const RouteLink: FC<RouteLinkProps> = ({
    children,
    dispatch,
    route,
    onClick
}) => {
    const url = location.pathname + routeToHash(route)

    const dispatchRoute: EventHandler<MouseEvent<HTMLAnchorElement>> = event => {
        event.preventDefault()
        dispatch({
            tag: 'PushRoute',
            route,
            replace: false
        })
        onClick?.()
    }

    function routeToEditor(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()
        onClick?.()
        dispatch(action)
    }

    return (
        <a className={buttonClassName()}
                style={style}
                onClick={routeToEditor}
                href={url}>
            {children}
        </a>
    )
}
