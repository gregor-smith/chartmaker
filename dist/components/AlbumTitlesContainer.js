import { jsx as _jsx } from "react/jsx-runtime";
export const id = 'titles';
export const AlbumTitlesContainer = ({ children, dispatch }) => {
    function mouseLeave() {
        dispatch({ tag: 'UnhighlightAlbum' });
    }
    return (_jsx("div", { id: id, onMouseLeave: mouseLeave, children: children }, void 0));
};
//# sourceMappingURL=AlbumTitlesContainer.js.map