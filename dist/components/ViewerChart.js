import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { splitAlbumsAccordingToShape } from '../utils.js';
import { Chart } from './Chart.js';
import { ViewerAlbumRows } from './ViewerAlbumRows.js';
import { ViewerAlbumTitles } from './ViewerAlbumTitles.js';
export const ViewerChart = forwardRef(({ dispatch, albums, highlighted, name, shape, size }, ref) => {
    const [rows, groups] = splitAlbumsAccordingToShape(albums, shape, size);
    return (_jsxs(Chart, Object.assign({ ref: ref, name: name }, { children: [_jsx(ViewerAlbumRows, { dispatch: dispatch, rows: rows, highlighted: highlighted }, void 0), _jsx(ViewerAlbumTitles, { dispatch: dispatch, groups: groups, highlighted: highlighted }, void 0)] }), void 0));
});
//# sourceMappingURL=ViewerChart.js.map