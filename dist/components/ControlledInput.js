import { jsx as _jsx } from "react/jsx-runtime";
import { inputStyle } from '../style.js';
export const ControlledInput = ({ onChange, ...props }) => {
    function controlledOnChange(event) {
        event.preventDefault();
        onChange(event.target.value);
    }
    return _jsx("input", Object.assign({}, props, { className: inputStyle, onChange: controlledOnChange }), void 0);
};
//# sourceMappingURL=ControlledInput.js.map