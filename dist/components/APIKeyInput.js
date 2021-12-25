import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarGroup } from './SidebarGroup.js';
import { Label } from './Label.js';
import { ControlledInput } from './ControlledInput.js';
export const id = 'apiKeyInput';
export const APIKeyInput = ({ dispatch, apiKey }) => {
    function updateAPIKey(apiKey) {
        dispatch({
            tag: 'UpdateAPIKey',
            apiKey
        });
    }
    return (_jsxs(SidebarGroup, { children: [_jsx(Label, { target: id, children: "Last.fm API key" }, void 0), _jsx(ControlledInput, { id: id, type: 'password', value: apiKey, onChange: updateAPIKey }, void 0)] }, void 0));
};
//# sourceMappingURL=APIKeyInput.js.map