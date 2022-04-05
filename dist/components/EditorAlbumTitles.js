import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlbumTitlesContainer } from './AlbumTitlesContainer.js';
import { AlbumTitle } from './AlbumTitle.js';
import { RenameAlbumButton } from './RenameAlbumButton.js';
import { DeleteAlbumButton } from './DeleteAlbumButton.js';
import { AlbumTitleGroup } from './AlbumTitleGroup.js';
export const EditorAlbumTitles = ({ dispatch, groups, highlighted }) => {
    const elements = groups.map((group, index) => {
        const titles = group.map(({ id, name }) => _jsxs(AlbumTitle, { dispatch: dispatch, id: id, name: name, highlighted: highlighted, children: [_jsx(RenameAlbumButton, { dispatch: dispatch, id: id }), _jsx(DeleteAlbumButton, { dispatch: dispatch, id: id })] }, id));
        return (_jsx(AlbumTitleGroup, { children: titles }, index));
    });
    return (_jsx(AlbumTitlesContainer, { dispatch: dispatch, children: elements }));
};
//# sourceMappingURL=EditorAlbumTitles.js.map