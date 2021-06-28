import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from 'emotion';
import { buttonStyle } from '../style.js';
import { routeToHash } from '../utils.js';
const route = { tag: 'Editor' };
const action = {
    tag: 'PushRoute',
    route,
    replace: false
};
const hash = routeToHash(route);
export const ViewerNavigationLink = ({ dispatch, className, onClick, children }) => {
    function routeToEditor(event) {
        event.preventDefault();
        onClick?.();
        dispatch(action);
    }
    return (_jsx("a", Object.assign({ className: cx(buttonStyle, className), onClick: routeToEditor, href: location.pathname + hash }, { children: children }), void 0));
};
//# sourceMappingURL=ViewerNavigationLink.js.map