import { jsx as _jsx } from "react/jsx-runtime";
import { ViewerNavigationLink } from './ViewerNavigationLink.js';
export const ViewerEditButton = ({ dispatch }) => {
    function importChart() {
        dispatch({ tag: 'ImportViewerChart' });
    }
    return (_jsx(ViewerNavigationLink, { dispatch: dispatch, onClick: importChart, children: "Edit" }));
};
//# sourceMappingURL=ViewerEditButton.js.map