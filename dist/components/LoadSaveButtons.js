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
export const LoadSaveButtons = ({ dispatch, children }) => _jsxs(SidebarGroup, { style: outerStyle, children: [_jsxs("div", { style: innerStyle, children: [_jsx(LoadStateButton, { dispatch: dispatch }), _jsx(SaveStateButton, { dispatch: dispatch })] }), children] });
//# sourceMappingURL=LoadSaveButtons.js.map