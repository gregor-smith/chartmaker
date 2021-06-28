import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { TEXT_COLOUR, ALBUM_PADDING_SIZE, highlightBackgroundStyle } from '../style.js';
import { unidentifiedAlbumIsPlaceholder } from '../utils.js';
const baseContainerStyle = css({
    position: 'relative',
    background: TEXT_COLOUR,
    margin: ALBUM_PADDING_SIZE,
    cursor: 'grab'
});
const imageStyle = css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    objectFit: 'contain'
});
const baseOverlayStyle = cx(imageStyle, css({ zIndex: 10 }));
export const AlbumCover = ({ album, size, onDragStart, onDragEnter, onDragOver, onDrop, onMouseEnter, children, overlayClass, highlighted }) => {
    const containerStyle = cx(baseContainerStyle, css({
        width: size,
        height: size,
        ':not(:hover) > div': {
            display: 'none'
        }
    }), highlighted === false
        ? highlightBackgroundStyle
        : undefined);
    let image;
    if (!unidentifiedAlbumIsPlaceholder(album)) {
        image = (
        // lazy loading causes problems with html2canvas so keep it default
        _jsx("img", { className: imageStyle, src: album.url, alt: album.name, crossOrigin: 'anonymous' }, void 0));
        children = (_jsx("div", Object.assign({ className: cx(baseOverlayStyle, overlayClass) }, { children: children }), void 0));
    }
    return (_jsxs("div", Object.assign({ className: containerStyle, draggable: !unidentifiedAlbumIsPlaceholder(album), onDragStart: onDragStart, onDragEnter: onDragEnter, onDragOver: onDragOver, onDrop: onDrop, onMouseEnter: onMouseEnter, title: album?.name }, { children: [image, children] }), void 0));
};
//# sourceMappingURL=AlbumCover.js.map