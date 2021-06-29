import { jsx as _jsx } from "react/jsx-runtime";
import { SIDEBAR_WIDTH, CONTAINER_PADDING_SIZE } from '../style.js';
const style = {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: SIDEBAR_WIDTH,
    height: `calc(100vh - (${CONTAINER_PADDING_SIZE} * 2))`,
    marginRight: CONTAINER_PADDING_SIZE
};
export const Sidebar = ({ children }) => _jsx("aside", Object.assign({ style: style }, { children: children }), void 0);
//# sourceMappingURL=Sidebar.js.map