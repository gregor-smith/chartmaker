import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { ViewerNavigationLink } from './ViewerNavigationLink.js';
const style = css({
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
});
export const ViewerBackButton = ({ dispatch }) => _jsx(ViewerNavigationLink, Object.assign({ className: style, dispatch: dispatch }, { children: "Back" }), void 0);
//# sourceMappingURL=ViewerBackButton.js.map