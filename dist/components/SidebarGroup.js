import { jsx as _jsx } from "react/jsx-runtime";
import { css, cx } from 'emotion';
import { BORDER, CONTAINER_PADDING_SIZE } from '../style.js';
const style = css({
    ':first-of-type': {
        borderTop: BORDER,
        paddingTop: CONTAINER_PADDING_SIZE
    },
    ':not(:last-of-type)': {
        borderBottom: BORDER,
        paddingBottom: CONTAINER_PADDING_SIZE,
        marginBottom: CONTAINER_PADDING_SIZE
    }
});
export const SidebarGroup = ({ children, className }) => _jsx("div", Object.assign({ className: cx(style, className) }, { children: children }), void 0);
//# sourceMappingURL=SidebarGroup.js.map