import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarGroup } from './SidebarGroup.js';
import { LoadStateButton } from './LoadStateButton.js';
import { SaveStateButton } from './SaveStateButton.js';
const outerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};
const innerStyle = {
    display: 'flex'
};
export const LoadSaveButtons = ({ dispatch, children }) => _jsxs(SidebarGroup, Object.assign({ style: outerStyle }, { children: [_jsxs("div", Object.assign({ style: innerStyle }, { children: [_jsx(LoadStateButton, { dispatch: dispatch }, void 0), _jsx(SaveStateButton, { dispatch: dispatch }, void 0)] }), void 0), children] }), void 0);
//# sourceMappingURL=LoadSaveButtons.js.map