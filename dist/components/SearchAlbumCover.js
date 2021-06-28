import { jsx as _jsx } from "react/jsx-runtime";
import { AlbumCover } from './AlbumCover.js';
import { SMALL_ALBUM_SIZE } from '../style.js';
export const SearchAlbumCover = ({ album, index }) => {
    function dragStart(event) {
        event.dataTransfer.setData(`search-${index}`, '');
        event.dataTransfer.effectAllowed = 'copy';
    }
    return (_jsx(AlbumCover, { album: album, size: SMALL_ALBUM_SIZE, onDragStart: dragStart }, void 0));
};
//# sourceMappingURL=SearchAlbumCover.js.map