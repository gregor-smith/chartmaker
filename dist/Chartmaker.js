import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/scss/bootstrap-reboot.scss';
import { useRef, useEffect } from 'react';
import { useSideEffectReducer } from 'react-use-side-effect-reducer';
import { createReducer } from './reducer.js';
import { createInitialState, loadStateFromLocalStorage, routeFromHash, saveStateToLocalStorage } from './utils.js';
import { BACKGROUND_COLOUR, TEXT_COLOUR, FONT_SIZE, CONTAINER_PADDING_SIZE } from './style.js';
import { Editor } from './pages/Editor.js';
import { Viewer } from './pages/Viewer.js';
import { searchLastFM } from './api.js';
import { APIKeyInput } from './components/APIKeyInput.js';
import { CopyLinkButton } from './components/CopyLinkButton.js';
function loadState() {
    var _a;
    return (_a = loadStateFromLocalStorage()) !== null && _a !== void 0 ? _a : createInitialState();
}
const style = {
    display: 'flex',
    alignItems: 'start',
    minHeight: '100vh',
    minWidth: 'max-content',
    background: BACKGROUND_COLOUR,
    color: TEXT_COLOUR,
    fontSize: FONT_SIZE,
    padding: CONTAINER_PADDING_SIZE
};
export const Chartmaker = ({ searcher = searchLastFM, keyInputComponent = APIKeyInput, copyLinkComponent = CopyLinkButton }) => {
    var _a;
    const chartRef = useRef(null);
    const [state, dispatch] = useSideEffectReducer(loadState, createReducer(searcher));
    useEffect(() => saveStateToLocalStorage(state), [state]);
    useEffect(() => {
        function popRoute() {
            dispatch({
                tag: 'PopRoute',
                route: routeFromHash(location.hash)
            });
        }
        popRoute();
        addEventListener('popstate', popRoute);
        return () => removeEventListener('popstate', popRoute);
    }, []);
    let page;
    switch ((_a = state.route) === null || _a === void 0 ? void 0 : _a.tag) {
        case 'Editor':
            page = (_jsx(Editor, Object.assign({}, state, { dispatch: dispatch, chartRef: chartRef, keyInputComponent: keyInputComponent, copyLinkComponent: copyLinkComponent }), void 0));
            break;
        case 'Viewer':
            page = (_jsx(Viewer, { dispatch: dispatch, chart: state.route.chart, chartRef: chartRef, highlighted: state.highlightedID, screenshotState: state.screenshotState }, void 0));
            break;
        case undefined:
            page = null;
    }
    return (_jsx("div", Object.assign({ style: style }, { children: page }), void 0));
};
//# sourceMappingURL=Chartmaker.js.map