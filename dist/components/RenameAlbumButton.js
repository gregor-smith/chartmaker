import { jsx as _jsx } from "react/jsx-runtime";
import { AlbumActionButton } from './AlbumActionButton.js';
export const RenameAlbumButton = ({ dispatch, id }) => {
    function rename() {
        dispatch({ tag: 'PromptToRenameAlbum', id });
    }
    return (_jsx(AlbumActionButton, { onClick: rename, title: 'Rename', children: "\u270F\uFE0F" }, void 0));
};
//# sourceMappingURL=RenameAlbumButton.js.map