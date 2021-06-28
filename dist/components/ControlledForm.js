import { jsx as _jsx } from "react/jsx-runtime";
export const ControlledForm = ({ children, onSubmit }) => {
    function submit(event) {
        event.preventDefault();
        onSubmit();
    }
    return (_jsx("form", Object.assign({ onSubmit: submit }, { children: children }), void 0));
};
//# sourceMappingURL=ControlledForm.js.map