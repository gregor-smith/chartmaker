import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { ViewerSidebar } from '../components/ViewerSidebar.js';
import { ViewerChart } from '../components/ViewerChart.js';
import { ERROR_TEXT_COLOUR } from '../style.js';
const errorStyle = css({
    color: ERROR_TEXT_COLOUR
});
export const Viewer = ({ dispatch, chartRef, chart, screenshotState, highlighted }) => {
    let content;
    if (chart === null) {
        content = (_jsx("main", { children: _jsx("h1", Object.assign({ className: errorStyle }, { children: "Invalid chart URL" }), void 0) }, void 0));
    }
    else {
        content = (_jsx(ViewerChart, Object.assign({}, chart, { ref: chartRef, dispatch: dispatch, highlighted: highlighted }), void 0));
    }
    return (_jsxs(_Fragment, { children: [_jsx(ViewerSidebar, { dispatch: dispatch, chartRef: chartRef, screenshotState: screenshotState, importDisabled: chart === null }, void 0), content] }, void 0));
};
//# sourceMappingURL=Viewer.js.map