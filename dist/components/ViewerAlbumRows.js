import { jsx as _jsx } from "react/jsx-runtime";
import { getAlbumID } from '../utils.js';
import { AlbumRowsContainer } from './AlbumRowsContainer.js';
import { ChartAlbumCover } from './ChartAlbumCover.js';
import { AlbumRow } from './AlbumRow.js';
export const ViewerAlbumRows = ({ dispatch, rows, highlighted }) => {
    const elements = rows.map(({ albums, size }, index) => {
        const covers = albums.map(album => _jsx(ChartAlbumCover, { dispatch: dispatch, album: album, highlighted: highlighted, size: size }, getAlbumID(album)));
        return (_jsx(AlbumRow, { children: covers }, index));
    });
    return (_jsx(AlbumRowsContainer, { dispatch: dispatch, children: elements }, void 0));
};
//# sourceMappingURL=ViewerAlbumRows.js.map