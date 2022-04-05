import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar } from './Sidebar.js';
import { ScreenshotButtons } from './ScreenshotButtons.js';
import { ViewerNavigationButtons } from './ViewerNavigationButtons.js';
export const ViewerSidebar = ({ dispatch, chartRef, screenshotState, importDisabled }) => _jsxs(Sidebar, { children: [_jsx(ViewerNavigationButtons, { dispatch: dispatch, importDisabled: importDisabled }), _jsx(ScreenshotButtons, { dispatch: dispatch, chartRef: chartRef, screenshotState: screenshotState })] });
//# sourceMappingURL=ViewerSidebar.js.map