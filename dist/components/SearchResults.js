import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { SidebarGroup } from './SidebarGroup.js';
import { SearchAlbumCover } from './SearchAlbumCover.js';
const containerStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
});
const groupStyle = css({
    overflowY: 'scroll'
});
export const SearchResults = ({ albums }) => {
    const albumCovers = albums.map((album, index) => _jsx(SearchAlbumCover, { album: album, index: index }, index));
    return (_jsx(SidebarGroup, Object.assign({ className: groupStyle }, { children: _jsx("div", Object.assign({ className: containerStyle }, { children: albumCovers }), void 0) }), void 0));
};
//# sourceMappingURL=SearchResults.js.map