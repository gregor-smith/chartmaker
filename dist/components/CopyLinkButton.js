import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
import { routeToHash } from '../utils.js';
export const CopyLinkButton = ({ chart }) => {
    function copyLink() {
        const hash = routeToHash({ tag: 'Viewer', chart });
        navigator.clipboard.writeText(location.origin + location.pathname + hash);
    }
    return (_jsx(Button, { onClick: copyLink, children: "Copy link" }, void 0));
};
//# sourceMappingURL=CopyLinkButton.js.map