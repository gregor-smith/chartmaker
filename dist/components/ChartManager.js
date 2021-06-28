import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { ChartSelector } from './ChartSelector.js';
import { NewChartButton } from './NewChartButton.js';
import { RenameActiveChartButton } from './RenameActiveChartButton.js';
import { DeleteActiveChartButton } from './DeleteActiveChartButton.js';
import { SidebarGroup } from './SidebarGroup.js';
import { MoveChartButton } from './MoveChartButton.js';
const buttonsContainerStyle = css({
    display: 'flex',
    justifyContent: 'space-between'
});
const groupStyle = css({
    display: 'flex'
});
export const ChartManager = ({ dispatch, charts, activeChartIndex }) => _jsxs(SidebarGroup, { children: [_jsx(ChartSelector, { dispatch: dispatch, charts: charts, activeChartIndex: activeChartIndex }, void 0), _jsxs("div", Object.assign({ className: buttonsContainerStyle }, { children: [_jsxs("div", Object.assign({ className: groupStyle }, { children: [_jsx(NewChartButton, { dispatch: dispatch }, void 0), _jsx(RenameActiveChartButton, { dispatch: dispatch }, void 0), _jsx(DeleteActiveChartButton, { dispatch: dispatch }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: groupStyle }, { children: [_jsx(MoveChartButton, Object.assign({ dispatch: dispatch, direction: 'Up', disabled: activeChartIndex === 0 }, { children: "\u2191" }), void 0), _jsx(MoveChartButton, Object.assign({ dispatch: dispatch, direction: 'Down', disabled: activeChartIndex === charts.length - 1 }, { children: "\u2193" }), void 0)] }), void 0)] }), void 0)] }, void 0);
//# sourceMappingURL=ChartManager.js.map