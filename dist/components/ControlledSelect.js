import { jsx as _jsx } from "react/jsx-runtime";
import { inputStyle } from '../style.js';
export const ControlledSelect = ({ onChange, ...props }) => {
    function change(event) {
        event.preventDefault();
        const value = Number(event.target.value);
        onChange(value);
    }
    return _jsx("select", Object.assign({}, props, { className: inputStyle, onChange: change }), void 0);
};
//# sourceMappingURL=ControlledSelect.js.map