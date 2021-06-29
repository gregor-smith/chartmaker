import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CollageDimension } from '../types.js';
import { ControlledSlider } from './ControlledSlider.js';
import { ControlledRadioButton } from './ControlledRadioButton.js';
import { SidebarGroup } from './SidebarGroup.js';
const style = {
    display: 'flex'
};
export const ChartShapeControls = ({ dispatch, shape: [rowsX, rowsY], size }) => {
    function changeShape(shape, size) {
        dispatch({
            tag: 'UpdateChartShape',
            shape,
            size
        });
    }
    function switchToTop40() {
        changeShape([rowsX, rowsY], 40);
    }
    function switchToTop42() {
        changeShape([rowsX, rowsY], 42);
    }
    function switchToTop100() {
        changeShape([rowsX, rowsY], 100);
    }
    function switchToCollage() {
        changeShape([rowsX, rowsY], null);
    }
    let rowsXSlider;
    let rowsYSlider;
    if (size === null) {
        const updateRowsX = (rowsX) => {
            if (!CollageDimension.guard(rowsX)) {
                return;
            }
            dispatch({
                tag: 'UpdateChartShape',
                shape: [rowsX, rowsY],
                size
            });
        };
        const updateRowsY = (rowsY) => {
            if (!CollageDimension.guard(rowsY)) {
                return;
            }
            dispatch({
                tag: 'UpdateChartShape',
                shape: [rowsX, rowsY],
                size
            });
        };
        rowsXSlider = (_jsx(ControlledSlider, Object.assign({ id: 'rows-x', min: CollageDimension.alternatives[0].value, max: CollageDimension.alternatives[CollageDimension.alternatives.length - 1].value, step: 1, value: rowsX, onChange: updateRowsX }, { children: "X" }), void 0));
        rowsYSlider = (_jsx(ControlledSlider, Object.assign({ id: 'rows-y', min: CollageDimension.alternatives[0].value, max: CollageDimension.alternatives[CollageDimension.alternatives.length - 1].value, step: 1, value: rowsY, onChange: updateRowsY }, { children: "Y" }), void 0));
    }
    return (_jsxs(SidebarGroup, { children: [_jsxs("div", Object.assign({ style: style }, { children: [_jsx(ControlledRadioButton, Object.assign({ id: 'top40', checked: size === 40, onCheck: switchToTop40 }, { children: "Top 40" }), void 0), _jsx(ControlledRadioButton, Object.assign({ id: 'top42', checked: size === 42, onCheck: switchToTop42 }, { children: "Top 42" }), void 0), _jsx(ControlledRadioButton, Object.assign({ id: 'top100', checked: size === 100, onCheck: switchToTop100 }, { children: "Top 100" }), void 0), _jsx(ControlledRadioButton, Object.assign({ id: 'collage', checked: size === null, onCheck: switchToCollage }, { children: "Collage" }), void 0)] }), void 0), rowsXSlider, rowsYSlider] }, void 0));
};
//# sourceMappingURL=ChartShapeControls.js.map