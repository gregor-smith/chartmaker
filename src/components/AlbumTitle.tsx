import type { CSSProperties, FC } from 'react'
import { css, cx } from 'emotion'

import type { DispatchProps } from '../reducer.js'
import { SIDEBAR_LABEL_PADDING_SIZE, highlightBackgroundClassName } from '../style.js'


const labelStyle: CSSProperties = {
    marginRight: SIDEBAR_LABEL_PADDING_SIZE
}


export type AlbumTitleProps = DispatchProps & {
    id: number
    name: string
    highlighted: number | null
}


export const AlbumTitle: FC<AlbumTitleProps> = ({
    dispatch,
    id,
    name,
    highlighted,
    children
}) => {
    function mouseEnter() {
        dispatch({
            tag: 'HighlightAlbum',
            targetID: id
        })
    }

    let className = css({
        display: 'flex',
        [':not(:hover) > *:not(:first-child)']: {
            display: 'none'
        }
    })
    if (highlighted !== null && id !== highlighted) {
        className = cx(className, highlightBackgroundClassName())
    }

    return (
        <div className={className} onMouseEnter={mouseEnter}>
            <span style={labelStyle}>
                {name}
            </span>
            {children}
        </div>
    )
}
