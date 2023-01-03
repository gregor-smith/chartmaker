import { jsx as _jsx } from "react/jsx-runtime";
import { ALBUM_BUTTONS_PADDING_SIZE } from '../style.js';
import { AlbumCover } from './AlbumCover.js';
import { getAlbumID, identifiedAlbumIsPlaceholder } from '../utils.js';
const overlayStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: ALBUM_BUTTONS_PADDING_SIZE
};
export const ChartAlbumCover = ({ dispatch, album, highlighted, ...props }) => {
    const id = getAlbumID(album);
    function mouseEnter() {
        dispatch({
            tag: 'HighlightAlbum',
            targetID: id
        });
    }
    return (_jsx(AlbumCover, { ...props, highlighted: highlighted === null
            ? undefined
            : id === highlighted, album: identifiedAlbumIsPlaceholder(album) ? null : album, overlayStyle: overlayStyle, onMouseEnter: mouseEnter }));
};
//# sourceMappingURL=ChartAlbumCover.js.map