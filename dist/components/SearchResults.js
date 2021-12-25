import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarGroup } from './SidebarGroup.js';
import { SearchAlbumCover } from './SearchAlbumCover.js';
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
};
const groupStyle = {
    overflowY: 'scroll'
};
export const SearchResults = ({ albums }) => {
    const albumCovers = albums.map((album, index) => _jsx(SearchAlbumCover, { album: album, index: index }, index));
    return (_jsx(SidebarGroup, { style: groupStyle, children: _jsx("div", { style: containerStyle, children: albumCovers }, void 0) }, void 0));
};
//# sourceMappingURL=SearchResults.js.map