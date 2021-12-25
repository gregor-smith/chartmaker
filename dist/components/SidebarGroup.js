import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { BORDER, CONTAINER_PADDING_SIZE } from '../style.js';
export const SidebarGroup = ({ children, style }) => {
    const className = css({
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
    return (_jsx("div", { className: className, style: style, children: children }, void 0));
};
//# sourceMappingURL=SidebarGroup.js.map