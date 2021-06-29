import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Label } from './Label.js';
import { ControlledSelect } from './ControlledSelect.js';
export const id = 'chartSelector';
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: SIDEBAR_ITEM_PADDING_SIZE
};
export const ChartSelector = ({ dispatch, charts, activeChartIndex }) => {
    function updateActiveChart(index) {
        dispatch({
            tag: 'UpdateActiveChart',
            index
        });
    }
    const options = charts.map((chart, index) => _jsx("option", Object.assign({ value: index }, { children: chart.name }), chart.name));
    return (_jsxs("div", Object.assign({ style: containerStyle }, { children: [_jsx(Label, Object.assign({ target: id }, { children: "Active chart" }), void 0), _jsx(ControlledSelect, Object.assign({ id: id, value: activeChartIndex, onChange: updateActiveChart }, { children: options }), void 0)] }), void 0));
};
//# sourceMappingURL=ChartSelector.js.map