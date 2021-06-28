import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { SidebarGroup } from './SidebarGroup.js';
import { LoadStateButton } from './LoadStateButton.js';
import { SaveStateButton } from './SaveStateButton.js';
import { CopyLinkButton } from './CopyLinkButton.js';
const outerStyle = css({
    display: 'flex',
    justifyContent: 'space-between'
});
const innerStyle = css({
    display: 'flex'
});
export const LoadSaveButtons = ({ dispatch, chart, showCopyLinkButton }) => {
    let copyLinkButton;
    if (showCopyLinkButton) {
        copyLinkButton = _jsx(CopyLinkButton, { chart: chart }, void 0);
    }
    return (_jsxs(SidebarGroup, Object.assign({ className: outerStyle }, { children: [_jsxs("div", Object.assign({ className: innerStyle }, { children: [_jsx(LoadStateButton, { dispatch: dispatch }, void 0), _jsx(SaveStateButton, { dispatch: dispatch }, void 0)] }), void 0), copyLinkButton] }), void 0));
};
//# sourceMappingURL=LoadSaveButtons.js.map