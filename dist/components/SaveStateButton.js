import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const SaveStateButton = ({ dispatch }) => {
    function promptToSaveState() {
        dispatch({ tag: 'PromptToSaveState' });
    }
    return (_jsx(Button, { onClick: promptToSaveState, children: "Save state" }));
};
//# sourceMappingURL=SaveStateButton.js.map