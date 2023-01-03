import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { SIDEBAR_LABEL_PADDING_SIZE, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Label } from './Label.js';
const inputStyle = {
    marginRight: SIDEBAR_LABEL_PADDING_SIZE
};
export const ControlledRadioButton = ({ id, checked, onCheck, children }) => {
    const containerClassName = css({
        display: 'flex',
        alignItems: 'center',
        ':not(:first-of-type)': {
            marginLeft: SIDEBAR_ITEM_PADDING_SIZE
        },
        ':not(:last-of-type)': {
            marginRight: SIDEBAR_ITEM_PADDING_SIZE
        }
    });
    return (_jsxs("div", { className: containerClassName, children: [_jsx("input", { id: id, style: inputStyle, type: 'radio', checked: checked, onChange: onCheck }), _jsx(Label, { target: id, children: children })] }));
};
//# sourceMappingURL=ControlledRadioButton.js.map