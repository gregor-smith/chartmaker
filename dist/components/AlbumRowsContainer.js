import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { CONTAINER_PADDING_SIZE } from '../style.js';
export const id = 'rows';
const style = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: CONTAINER_PADDING_SIZE
});
export const AlbumRowsContainer = ({ dispatch, children }) => {
    function mouseLeave() {
        dispatch({ tag: 'UnhighlightAlbum' });
    }
    return (_jsx("div", Object.assign({ id: id, className: style, onMouseLeave: mouseLeave }, { children: children }), void 0));
};
//# sourceMappingURL=AlbumRowsContainer.js.map