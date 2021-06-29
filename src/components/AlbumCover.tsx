import type { FC, DragEvent, CSSProperties } from 'react'
import { css, cx } from 'emotion'

import { TEXT_COLOUR, ALBUM_PADDING_SIZE, highlightBackgroundClassName } from '../style.js'
import type { UnidentifiedAlbum } from '../types.js'
import { unidentifiedAlbumIsPlaceholder } from '../utils.js'


const imageStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    objectFit: 'contain'
}


const baseOverlayStyle: CSSProperties = {
    ...imageStyle,
    zIndex: 10
}


export type AlbumCoverProps = {
    album: UnidentifiedAlbum
    size: string
    onDragStart?: (event: DragEvent<HTMLDivElement>) => void
    onDragOver?: (event: DragEvent<HTMLDivElement>) => void
    onDragEnter?: (event: DragEvent<HTMLDivElement>) => void
    onDrop?: (event: DragEvent<HTMLDivElement>) => void
    onMouseEnter?: () => void
    overlayStyle?: CSSProperties
    highlighted?: boolean
}


export const AlbumCover: FC<AlbumCoverProps> = ({
    album,
    size,
    onDragStart,
    onDragEnter,
    onDragOver,
    onDrop,
    onMouseEnter,
    children,
    overlayStyle = {},
    highlighted
}) => {
    let image: JSX.Element | undefined
    if (!unidentifiedAlbumIsPlaceholder(album)) {
        image = (
            // lazy loading causes problems with html2canvas so keep it default
            <img style={imageStyle}
                src={album.url}
                alt={album.name}
                crossOrigin='anonymous'/>
        )
        children = (
            <div style={{ ...baseOverlayStyle, ...overlayStyle }}>
                {children}
            </div>
        )
    }

    const className = cx(
        css({
            position: 'relative',
            background: TEXT_COLOUR,
            margin: ALBUM_PADDING_SIZE,
            cursor: 'grab',
            width: size,
            height: size,
            ':not(:hover) > div': {
                display: 'none !important'
            }
        }),
        highlighted === false
            ? highlightBackgroundClassName()
            : undefined
    )

    return (
        <div className={className}
                draggable={!unidentifiedAlbumIsPlaceholder(album)}
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onMouseEnter={onMouseEnter}
                title={album?.name}>
            {image}
            {children}
        </div>
    )
}
