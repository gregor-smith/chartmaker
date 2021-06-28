import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Chart } from './Chart.js';
import { splitAlbumsAccordingToShape } from '../utils.js';
import { EditorAlbumRows } from './EditorAlbumRows.js';
import { EditorAlbumTitles } from './EditorAlbumTitles.js';
export const EditorChart = forwardRef(({ dispatch, albums, highlighted, name, shape, size }, ref) => {
    const [rows, groups] = splitAlbumsAccordingToShape(albums, shape, size);
    return (_jsxs(Chart, Object.assign({ ref: ref, name: name }, { children: [_jsx(EditorAlbumRows, { dispatch: dispatch, rows: rows, highlighted: highlighted }, void 0), _jsx(EditorAlbumTitles, { dispatch: dispatch, groups: groups, highlighted: highlighted }, void 0)] }), void 0));
});
//# sourceMappingURL=EditorChart.js.map