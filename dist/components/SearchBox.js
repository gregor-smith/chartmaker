import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SIDEBAR_LABEL_PADDING_SIZE, ERROR_TEXT_COLOUR } from '../style.js';
import { Label } from './Label.js';
import { ControlledForm } from './ControlledForm.js';
import { SidebarGroup } from './SidebarGroup.js';
import { ControlledInput } from './ControlledInput.js';
export const id = 'search';
const errorStyle = {
    color: ERROR_TEXT_COLOUR,
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE,
    userSelect: 'none'
};
export const SearchBox = ({ dispatch, searchState }) => {
    function sendSearchRequest() {
        dispatch({ tag: 'CancelSearchRequest' });
        dispatch({ tag: 'SendSearchRequest' });
    }
    function updateQuery(query) {
        dispatch({
            tag: 'UpdateSearchQuery',
            query
        });
    }
    let errorMessage;
    if (searchState.tag === 'Error') {
        errorMessage = (_jsx("div", Object.assign({ style: errorStyle }, { children: searchState.message }), void 0));
    }
    return (_jsx(SidebarGroup, { children: _jsxs(ControlledForm, Object.assign({ onSubmit: sendSearchRequest }, { children: [_jsx(Label, Object.assign({ target: id }, { children: "Search for albums" }), void 0), errorMessage, _jsx(ControlledInput, { id: id, type: 'search', value: searchState.query, onChange: updateQuery, disabled: searchState.tag === 'Loading' }, void 0)] }), void 0) }, void 0));
};
//# sourceMappingURL=SearchBox.js.map