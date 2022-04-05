import { jsx as _jsx } from "react/jsx-runtime";
import { AlbumTitle } from './AlbumTitle.js';
import { AlbumTitleGroup } from './AlbumTitleGroup.js';
import { AlbumTitlesContainer } from './AlbumTitlesContainer.js';
export const ViewerAlbumTitles = ({ dispatch, groups, highlighted }) => {
    const elements = groups.map((group, index) => {
        const titles = group.map(({ id, name }) => _jsx(AlbumTitle, { dispatch: dispatch, id: id, name: name, highlighted: highlighted }, id));
        return (_jsx(AlbumTitleGroup, { children: titles }, index));
    });
    return (_jsx(AlbumTitlesContainer, { dispatch: dispatch, children: elements }));
};
//# sourceMappingURL=ViewerAlbumTitles.js.map