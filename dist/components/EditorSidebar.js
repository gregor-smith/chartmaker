import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChartManager } from './ChartManager.js';
import { APIKeyInput } from './APIKeyInput.js';
import { ScreenshotButtons } from './ScreenshotButtons.js';
import { SearchBox } from './SearchBox.js';
import { SearchResults } from './SearchResults.js';
import { ChartShapeControls } from './ChartShapeControls.js';
import { Sidebar } from './Sidebar.js';
import { LoadSaveButtons } from './LoadSaveButtons.js';
import { CopyLinkButton } from './CopyLinkButton.js';
export const EditorSidebar = ({ dispatch, charts, activeChartIndex, apiKey, searchState, screenshotState, chartRef, copyLinkComponent: CopyLinkComponent = CopyLinkButton, keyInputComponent: KeyInputComponent = APIKeyInput }) => {
    let searchResults;
    if (searchState.tag === 'Complete' && searchState.albums.length > 0) {
        searchResults = _jsx(SearchResults, { albums: searchState.albums });
    }
    return (_jsxs(Sidebar, { children: [_jsx(LoadSaveButtons, { dispatch: dispatch, children: _jsx(CopyLinkComponent, { chart: charts[activeChartIndex] }) }), _jsx(ChartManager, { dispatch: dispatch, charts: charts, activeChartIndex: activeChartIndex }), _jsx(ScreenshotButtons, { dispatch: dispatch, chartRef: chartRef, screenshotState: screenshotState }), _jsx(ChartShapeControls, { ...charts[activeChartIndex], dispatch: dispatch }), _jsx(KeyInputComponent, { dispatch: dispatch, apiKey: apiKey }), _jsx(SearchBox, { dispatch: dispatch, searchState: searchState }), searchResults] }));
};
//# sourceMappingURL=EditorSidebar.js.map