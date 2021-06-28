import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { inputStyle, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Label } from './Label.js';
const containerStyle = css({
    display: 'flex',
    alignItems: 'center'
});
const baseInputStyle = css({
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
});
export const ControlledSlider = ({ id, onChange, children, value, ...props }) => {
    function change(event) {
        event.preventDefault();
        const value = Number(event.target.value);
        onChange(value);
    }
    const style = cx(baseInputStyle, inputStyle);
    return (_jsxs("div", Object.assign({ className: containerStyle }, { children: [_jsx(Label, Object.assign({ target: id }, { children: children }), void 0), _jsx("input", Object.assign({}, props, { id: id, className: style, type: 'range', onChange: change, value: value }), void 0), _jsx(Label, Object.assign({ target: id }, { children: value }), void 0)] }), void 0));
};
//# sourceMappingURL=ControlledSlider.js.map