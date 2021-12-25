import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from 'emotion';
import { buttonClassName } from '../style.js';
export const Button = ({ className, ...props }) => _jsx("button", { ...props, className: cx(buttonClassName(), className) }, void 0);
//# sourceMappingURL=Button.js.map