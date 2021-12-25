import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const DeleteActiveChartButton = ({ dispatch }) => {
    function deleteActiveChart() {
        dispatch({ tag: 'PromptToDeleteActiveChart' });
    }
    return (_jsx(Button, { onClick: deleteActiveChart, children: "Delete" }, void 0));
};
//# sourceMappingURL=DeleteActiveChartButton.js.map