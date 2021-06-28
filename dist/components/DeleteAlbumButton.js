import { jsx as _jsx } from "react/jsx-runtime";
import { AlbumActionButton } from './AlbumActionButton.js';
export const DeleteAlbumButton = ({ dispatch, id }) => {
    function remove() {
        dispatch({ tag: 'DeleteAlbum', id });
    }
    return (_jsx(AlbumActionButton, Object.assign({ onClick: remove, title: 'Delete' }, { children: "\uD83D\uDDD1\uFE0F" }), void 0));
};
//# sourceMappingURL=DeleteAlbumButton.js.map