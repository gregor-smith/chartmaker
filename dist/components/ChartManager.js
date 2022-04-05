import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChartSelector } from './ChartSelector.js';
import { NewChartButton } from './NewChartButton.js';
import { RenameActiveChartButton } from './RenameActiveChartButton.js';
import { DeleteActiveChartButton } from './DeleteActiveChartButton.js';
import { SidebarGroup } from './SidebarGroup.js';
import { MoveChartButton } from './MoveChartButton.js';
const buttonsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};
const groupStyle = {
    display: 'flex'
};
export const ChartManager = ({ dispatch, charts, activeChartIndex }) => _jsxs(SidebarGroup, { children: [_jsx(ChartSelector, { dispatch: dispatch, charts: charts, activeChartIndex: activeChartIndex }), _jsxs("div", { style: buttonsContainerStyle, children: [_jsxs("div", { style: groupStyle, children: [_jsx(NewChartButton, { dispatch: dispatch }), _jsx(RenameActiveChartButton, { dispatch: dispatch }), _jsx(DeleteActiveChartButton, { dispatch: dispatch })] }), _jsxs("div", { style: groupStyle, children: [_jsx(MoveChartButton, { dispatch: dispatch, direction: 'Up', disabled: activeChartIndex === 0, children: "\u2191" }), _jsx(MoveChartButton, { dispatch: dispatch, direction: 'Down', disabled: activeChartIndex === charts.length - 1, children: "\u2193" })] })] })] });
//# sourceMappingURL=ChartManager.js.map