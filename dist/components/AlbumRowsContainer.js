import { jsx as _jsx } from "react/jsx-runtime";
import { CONTAINER_PADDING_SIZE } from '../style.js';
export const id = 'rows';
const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: CONTAINER_PADDING_SIZE
};
export const AlbumRowsContainer = ({ dispatch, children }) => {
    function mouseLeave() {
        dispatch({ tag: 'UnhighlightAlbum' });
    }
    return (_jsx("div", { id: id, style: style, onMouseLeave: mouseLeave, children: children }));
};
//# sourceMappingURL=AlbumRowsContainer.js.map