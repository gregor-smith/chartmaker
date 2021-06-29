import { jsx as _jsx } from "react/jsx-runtime";
import { inputClassName } from '../style.js';
export const ControlledInput = ({ onChange, ...props }) => {
    function controlledOnChange(event) {
        event.preventDefault();
        onChange(event.target.value);
    }
    return _jsx("input", Object.assign({}, props, { className: inputClassName(), onChange: controlledOnChange }), void 0);
};
//# sourceMappingURL=ControlledInput.js.map