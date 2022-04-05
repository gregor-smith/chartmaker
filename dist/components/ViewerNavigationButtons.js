import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarGroup } from './SidebarGroup.js';
import { ViewerBackButton } from './ViewerBackButton.js';
import { ViewerEditButton } from './ViewerEditButton.js';
const style = {
    display: 'flex'
};
export const ViewerNavigationButtons = ({ dispatch, importDisabled }) => {
    let editButton;
    if (!importDisabled) {
        editButton = _jsx(ViewerEditButton, { dispatch: dispatch });
    }
    return (_jsxs(SidebarGroup, { style: style, children: [_jsx(ViewerBackButton, { dispatch: dispatch }), editButton] }));
};
//# sourceMappingURL=ViewerNavigationButtons.js.map