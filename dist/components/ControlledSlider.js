import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { inputClassName, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Label } from './Label.js';
const containerStyle = {
    display: 'flex',
    alignItems: 'center'
};
export const ControlledSlider = ({ id, onChange, children, value, ...props }) => {
    function change(event) {
        event.preventDefault();
        const value = Number(event.target.value);
        onChange(value);
    }
    const className = cx(css({
        margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
    }), inputClassName());
    return (_jsxs("div", { style: containerStyle, children: [_jsx(Label, { target: id, children: children }, void 0), _jsx("input", { ...props, id: id, className: className, type: 'range', onChange: change, value: value }, void 0), _jsx(Label, { target: id, children: value }, void 0)] }, void 0));
};
//# sourceMappingURL=ControlledSlider.js.map