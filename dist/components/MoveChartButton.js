import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
export const MoveChartButton = ({ dispatch, direction, disabled, children }) => {
    function moveChart() {
        dispatch({ tag: 'MoveActiveChart', direction });
    }
    return (_jsx(Button, Object.assign({ disabled: disabled, onClick: moveChart, title: direction }, { children: children }), void 0));
};
//# sourceMappingURL=MoveChartButton.js.map