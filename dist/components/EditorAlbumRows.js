import { jsx as _jsx } from "react/jsx-runtime";
import { getAlbumID } from '../utils.js';
import { AlbumRowsContainer } from './AlbumRowsContainer.js';
import { EditorChartAlbumCover } from './EditorChartAlbumCover.js';
import { AlbumRow } from './AlbumRow.js';
export const EditorAlbumRows = ({ dispatch, rows, highlighted }) => {
    const elements = rows.map(({ albums, size }, index) => {
        const covers = albums.map(album => _jsx(EditorChartAlbumCover, { dispatch: dispatch, album: album, highlighted: highlighted, size: size }, getAlbumID(album)));
        return (_jsx(AlbumRow, { children: covers }, index));
    });
    return (_jsx(AlbumRowsContainer, { dispatch: dispatch, children: elements }));
};
//# sourceMappingURL=EditorAlbumRows.js.map