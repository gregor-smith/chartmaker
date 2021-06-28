import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const NewChartButton = ({ dispatch }) => {
    function addNewChart() {
        dispatch({ tag: 'PromptForNewChart' });
    }
    return (_jsx(Button, Object.assign({ onClick: addNewChart }, { children: "New" }), void 0));
};
//# sourceMappingURL=NewChartButton.js.map