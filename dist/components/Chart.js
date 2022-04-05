import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { CONTAINER_PADDING_SIZE, BORDER } from '../style.js';
const headerStyle = {
    fontSize: '2rem'
};
const outContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: CONTAINER_PADDING_SIZE,
    border: BORDER
};
const innerContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start'
};
export const Chart = forwardRef(({ name, children }, ref) => _jsxs("main", { ref: ref, style: outContainerStyle, children: [_jsx("h1", { style: headerStyle, children: name }), _jsx("div", { style: innerContainerStyle, children: children })] }));
//# sourceMappingURL=Chart.js.map