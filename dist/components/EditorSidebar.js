import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChartManager } from './ChartManager.js';
import { APIKeyInput } from './APIKeyInput.js';
import { ScreenshotButtons } from './ScreenshotButtons.js';
import { SearchBox } from './SearchBox.js';
import { SearchResults } from './SearchResults.js';
import { ChartShapeControls } from './ChartShapeControls.js';
import { Sidebar } from './Sidebar.js';
import { LoadSaveButtons } from './LoadSaveButtons.js';
export const EditorSidebar = ({ dispatch, charts, activeChartIndex, apiKey, searchState, screenshotState, chartRef, showAPIKeyInput, showCopyLinkButton }) => {
    let searchResults;
    if (searchState.tag === 'Complete' && searchState.albums.length > 0) {
        searchResults = _jsx(SearchResults, { albums: searchState.albums }, void 0);
    }
    let apiKeyInput;
    if (showAPIKeyInput) {
        apiKeyInput = _jsx(APIKeyInput, { dispatch: dispatch, apiKey: apiKey }, void 0);
    }
    return (_jsxs(Sidebar, { children: [_jsx(LoadSaveButtons, { dispatch: dispatch, chart: charts[activeChartIndex], showCopyLinkButton: showCopyLinkButton }, void 0), _jsx(ChartManager, { dispatch: dispatch, charts: charts, activeChartIndex: activeChartIndex }, void 0), _jsx(ScreenshotButtons, { dispatch: dispatch, chartRef: chartRef, screenshotState: screenshotState }, void 0), _jsx(ChartShapeControls, Object.assign({}, charts[activeChartIndex], { dispatch: dispatch }), void 0), apiKeyInput, _jsx(SearchBox, { dispatch: dispatch, searchState: searchState }, void 0), searchResults] }, void 0));
};
//# sourceMappingURL=EditorSidebar.js.map