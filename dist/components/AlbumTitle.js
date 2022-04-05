import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { SIDEBAR_LABEL_PADDING_SIZE, highlightBackgroundClassName } from '../style.js';
const labelStyle = {
    marginRight: SIDEBAR_LABEL_PADDING_SIZE
};
export const AlbumTitle = ({ dispatch, id, name, highlighted, children }) => {
    function mouseEnter() {
        dispatch({
            tag: 'HighlightAlbum',
            targetID: id
        });
    }
    let className = css({
        display: 'flex',
        [':not(:hover) > *:not(:first-child)']: {
            display: 'none'
        }
    });
    if (highlighted !== null && id !== highlighted) {
        className = cx(className, highlightBackgroundClassName());
    }
    return (_jsxs("div", { className: className, onMouseEnter: mouseEnter, children: [_jsx("span", { style: labelStyle, children: name }), children] }));
};
//# sourceMappingURL=AlbumTitle.js.map