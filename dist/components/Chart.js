import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { css } from 'emotion';
import { CONTAINER_PADDING_SIZE, BORDER } from '../style.js';
const outContainerStyle = css({
    display: 'flex',
    flexDirection: 'column',
    padding: CONTAINER_PADDING_SIZE,
    border: BORDER
});
const innerContainerStyle = css({
    display: 'flex',
    alignItems: 'flex-start'
});
export const Chart = forwardRef(({ name, children }, ref) => _jsxs("main", Object.assign({ ref: ref, className: outContainerStyle }, { children: [_jsx("h1", { children: name }, void 0), _jsx("div", Object.assign({ className: innerContainerStyle }, { children: children }), void 0)] }), void 0));
//# sourceMappingURL=Chart.js.map