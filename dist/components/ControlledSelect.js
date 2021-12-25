import { jsx as _jsx } from "react/jsx-runtime";
import { inputClassName } from '../style.js';
export const ControlledSelect = ({ onChange, ...props }) => {
    function change(event) {
        event.preventDefault();
        const value = Number(event.target.value);
        onChange(value);
    }
    return _jsx("select", { ...props, className: inputClassName(), onChange: change }, void 0);
};
//# sourceMappingURL=ControlledSelect.js.map