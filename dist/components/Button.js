import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from 'emotion';
import { buttonStyle } from '../style.js';
export const Button = ({ className, ...props }) => _jsx("button", Object.assign({}, props, { className: cx(buttonStyle, className) }), void 0);
//# sourceMappingURL=Button.js.map