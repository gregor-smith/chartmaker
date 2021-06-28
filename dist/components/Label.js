import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { SIDEBAR_LABEL_PADDING_SIZE } from '../style.js';
const style = css({
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE
});
export const Label = ({ children, target }) => _jsx("label", Object.assign({ className: style, htmlFor: target }, { children: children }), void 0);
//# sourceMappingURL=Label.js.map