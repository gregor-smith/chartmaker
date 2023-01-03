import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { TEXT_COLOUR, ALBUM_PADDING_SIZE, highlightBackgroundClassName } from '../style.js';
import { unidentifiedAlbumIsPlaceholder } from '../utils.js';
const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    objectFit: 'contain'
};
const baseOverlayStyle = {
    ...imageStyle,
    zIndex: 10
};
export const AlbumCover = ({ album, size, onDragStart, onDragEnter, onDragOver, onDrop, onMouseEnter, children, overlayStyle = {}, highlighted }) => {
    let image;
    if (!unidentifiedAlbumIsPlaceholder(album)) {
        const url = /^[0-9a-f]{32}$/.test(album.url)
            ? `https://lastfm.freetls.fastly.net/i/u/300x300/${album.url}.png`
            : album.url;
        image = (
        // lazy loading causes problems with html2canvas so keep it default
        _jsx("img", { style: imageStyle, src: url, alt: album.name, crossOrigin: 'anonymous' }));
        children = (_jsx("div", { style: { ...baseOverlayStyle, ...overlayStyle }, children: children }));
    }
    const className = cx(css({
        position: 'relative',
        background: TEXT_COLOUR,
        margin: ALBUM_PADDING_SIZE,
        cursor: 'grab',
        width: size,
        height: size,
        ':not(:hover) > div': {
            display: 'none !important'
        }
    }), highlighted === false
        ? highlightBackgroundClassName()
        : undefined);
    return (_jsxs("div", { className: className, draggable: !unidentifiedAlbumIsPlaceholder(album), onDragStart: onDragStart, onDragEnter: onDragEnter, onDragOver: onDragOver, onDrop: onDrop, onMouseEnter: onMouseEnter, title: album === null || album === void 0 ? void 0 : album.name, children: [image, children] }));
};
//# sourceMappingURL=AlbumCover.js.map