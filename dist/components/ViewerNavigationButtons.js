import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { SidebarGroup } from './SidebarGroup.js';
import { ViewerBackButton } from './ViewerBackButton.js';
import { ViewerEditButton } from './ViewerEditButton.js';
const style = css({
    display: 'flex'
});
export const ViewerNavigationButtons = ({ dispatch, importDisabled }) => {
    let editButton;
    if (!importDisabled) {
        editButton = _jsx(ViewerEditButton, { dispatch: dispatch }, void 0);
    }
    return (_jsxs(SidebarGroup, Object.assign({ className: style }, { children: [_jsx(ViewerBackButton, { dispatch: dispatch }, void 0), editButton] }), void 0));
};
//# sourceMappingURL=ViewerNavigationButtons.js.map