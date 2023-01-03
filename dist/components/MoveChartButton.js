import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const MoveChartButton = ({ dispatch, direction, disabled, children }) => {
    function moveChart() {
        dispatch({ tag: 'MoveActiveChart', direction });
    }
    return (_jsx(Button, { disabled: disabled, onClick: moveChart, title: direction, children: children }));
};
//# sourceMappingURL=MoveChartButton.js.map