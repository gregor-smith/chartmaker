import { jsx as _jsx } from "react/jsx-runtime";
export const ControlledForm = ({ children, onSubmit }) => {
    function submit(event) {
        event.preventDefault();
        onSubmit();
    }
    return (_jsx("form", { onSubmit: submit, children: children }));
};
//# sourceMappingURL=ControlledForm.js.map