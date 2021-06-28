import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'emotion';
import { TITLES_PADDING_SIZE, TITLES_FONT_SIZE } from '../style.js';
const style = css({
    marginBottom: TITLES_PADDING_SIZE,
    fontSize: TITLES_FONT_SIZE
});
export const AlbumTitleGroup = ({ children }) => _jsx("div", Object.assign({ className: style }, { children: children }), void 0);
//# sourceMappingURL=AlbumTitleGroup.js.map