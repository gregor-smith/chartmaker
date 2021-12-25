import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ScreenshotScale } from '../types.js';
import { ControlledSlider } from './ControlledSlider.js';
import { SidebarGroup } from './SidebarGroup.js';
import { Button } from './Button.js';
export const sliderID = 'screenshotScale';
export const buttonID = 'screenshot';
export const ScreenshotButtons = ({ dispatch, screenshotState: { loading, scale }, chartRef }) => {
    function updateScreenshotScale(scale) {
        if (!ScreenshotScale.guard(scale)) {
            return;
        }
        dispatch({ tag: 'UpdateScreenshotScale', scale });
    }
    function takeScreenshot() {
        if (chartRef.current === null) {
            return;
        }
        dispatch({
            tag: 'TakeScreenshot',
            element: chartRef.current
        });
    }
    return (_jsxs(SidebarGroup, { children: [_jsx(ControlledSlider, { id: sliderID, disabled: loading, value: scale, onChange: updateScreenshotScale, min: ScreenshotScale.alternatives[0].value, max: ScreenshotScale.alternatives[ScreenshotScale.alternatives.length - 1].value, step: 1, children: "Scale" }, void 0), _jsx(Button, { id: buttonID, onClick: takeScreenshot, disabled: loading, children: "Screenshot" }, void 0)] }, void 0));
};
//# sourceMappingURL=ScreenshotButtons.js.map