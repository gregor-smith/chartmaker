import { jsx as _jsx } from "react/jsx-runtime";
import { SIDEBAR_LABEL_PADDING_SIZE } from '../style.js';
const style = {
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE
};
export const Label = ({ children, target }) => _jsx("label", { style: style, htmlFor: target, children: children }, void 0);
//# sourceMappingURL=Label.js.map