import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const NewChartButton = ({ dispatch }) => {
    function addNewChart() {
        dispatch({ tag: 'PromptForNewChart' });
    }
    return (_jsx(Button, { onClick: addNewChart, children: "New" }));
};
//# sourceMappingURL=NewChartButton.js.map