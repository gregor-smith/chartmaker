import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button.js';
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
const style = {
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
};
export const RenameActiveChartButton = ({ dispatch }) => {
    function renameActiveChart() {
        dispatch({ tag: 'PromptToRenameActiveChart' });
    }
    return (_jsx(Button, { style: style, onClick: renameActiveChart, children: "Rename" }));
};
//# sourceMappingURL=RenameActiveChartButton.js.map