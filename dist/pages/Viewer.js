import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ViewerSidebar } from '../components/ViewerSidebar.js';
import { ViewerChart } from '../components/ViewerChart.js';
import { ERROR_TEXT_COLOUR } from '../style.js';
const errorStyle = {
    color: ERROR_TEXT_COLOUR
};
export const Viewer = ({ dispatch, chartRef, chart, screenshotState, highlighted }) => {
    let content;
    if (chart === null) {
        content = (_jsx("main", { children: _jsx("h1", { style: errorStyle, children: "Invalid chart URL" }) }));
    }
    else {
        content = (_jsx(ViewerChart, { ...chart, ref: chartRef, dispatch: dispatch, highlighted: highlighted }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(ViewerSidebar, { dispatch: dispatch, chartRef: chartRef, screenshotState: screenshotState, importDisabled: chart === null }), content] }));
};
//# sourceMappingURL=Viewer.js.map