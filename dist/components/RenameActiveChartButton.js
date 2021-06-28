import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { Button } from './Button.js';
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
const style = css({
    margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
});
export const RenameActiveChartButton = ({ dispatch }) => {
    function renameActiveChart() {
        dispatch({ tag: 'PromptToRenameActiveChart' });
    }
    return (_jsx(Button, Object.assign({ className: style, onClick: renameActiveChart }, { children: "Rename" }), void 0));
};
//# sourceMappingURL=RenameActiveChartButton.js.map