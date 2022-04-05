import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Button } from './Button.js';
const inputStyle = {
    display: 'none'
};
const buttonStyle = {
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
};
export const LoadStateButton = ({ dispatch }) => {
    const inputRef = useRef(null);
    function loadSelectedFile(event) {
        var _a;
        // files are accessed through the event rather than the ref for easier
        // mocking during testing
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file === undefined) {
            return;
        }
        dispatch({
            tag: 'LoadStateFile',
            file
        });
    }
    function clickInput() {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    }
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: inputRef, style: inputStyle, type: 'file', accept: 'application/json', onChange: loadSelectedFile }), _jsx(Button, { style: buttonStyle, onClick: clickInput, children: "Load state" })] }));
};
//# sourceMappingURL=LoadStateButton.js.map