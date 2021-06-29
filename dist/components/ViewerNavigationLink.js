import { jsx as _jsx } from "react/jsx-runtime";
import { buttonClassName } from '../style.js';
import { routeToHash } from '../utils.js';
const route = { tag: 'Editor' };
const action = {
    tag: 'PushRoute',
    route,
    replace: false
};
const hash = routeToHash(route);
export const ViewerNavigationLink = ({ dispatch, style, onClick, children }) => {
    function routeToEditor(event) {
        event.preventDefault();
        onClick === null || onClick === void 0 ? void 0 : onClick();
        dispatch(action);
    }
    return (_jsx("a", Object.assign({ className: buttonClassName(), style: style, onClick: routeToEditor, href: location.pathname + hash }, { children: children }), void 0));
};
//# sourceMappingURL=ViewerNavigationLink.js.map