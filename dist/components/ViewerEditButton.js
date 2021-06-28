import { jsx as _jsx } from "react/jsx-runtime";
import { ViewerNavigationLink } from './ViewerNavigationLink.js';
export const ViewerEditButton = ({ dispatch }) => {
    function importChart() {
        dispatch({ tag: 'ImportViewerChart' });
    }
    return (_jsx(ViewerNavigationLink, Object.assign({ dispatch: dispatch, onClick: importChart }, { children: "Edit" }), void 0));
};
//# sourceMappingURL=ViewerEditButton.js.map