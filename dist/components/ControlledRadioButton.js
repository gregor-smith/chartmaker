import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css } from 'emotion';
import { SIDEBAR_LABEL_PADDING_SIZE, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js';
import { Label } from './Label.js';
const containerStyle = css({
    display: 'flex',
    alignItems: 'center',
    ':not(:first-of-type)': {
        marginLeft: SIDEBAR_ITEM_PADDING_SIZE
    },
    ':not(:last-of-type)': {
        marginRight: SIDEBAR_ITEM_PADDING_SIZE
    }
});
const inputStyle = css({
    marginRight: SIDEBAR_LABEL_PADDING_SIZE
});
export const ControlledRadioButton = ({ id, checked, onCheck, children }) => _jsxs("div", Object.assign({ className: containerStyle }, { children: [_jsx("input", { id: id, className: inputStyle, type: 'radio', checked: checked, onChange: onCheck }, void 0), _jsx(Label, Object.assign({ target: id }, { children: children }), void 0)] }), void 0);
//# sourceMappingURL=ControlledRadioButton.js.map