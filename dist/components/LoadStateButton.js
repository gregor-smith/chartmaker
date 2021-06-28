import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { css } from 'emotion';
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Button } from './Button.js';
const inputStyle = css({
    display: 'none'
});
const buttonStyle = css({
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
});
export const LoadStateButton = ({ dispatch }) => {
    const inputRef = useRef(null);
    function loadSelectedFile(event) {
        // files are accessed through the event rather than the ref for easier
        // mocking during testing
        const file = event.target.files?.[0];
        if (file === undefined) {
            return;
        }
        dispatch({
            tag: 'LoadStateFile',
            file
        });
    }
    function clickInput() {
        inputRef.current?.click();
    }
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: inputRef, className: inputStyle, type: 'file', accept: 'application/json', onChange: loadSelectedFile }, void 0), _jsx(Button, Object.assign({ className: buttonStyle, onClick: clickInput }, { children: "Load state" }), void 0)] }, void 0));
};
//# sourceMappingURL=LoadStateButton.js.map