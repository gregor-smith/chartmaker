import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { RenameAlbumButton } from './RenameAlbumButton.js';
import { DeleteAlbumButton } from './DeleteAlbumButton.js';
import { getAlbumID, identifiedAlbumIsPlaceholder } from '../utils.js';
import { ChartAlbumCover } from './ChartAlbumCover.js';
const chartPattern = /^chart-([0-9]+)$/;
const searchPattern = /^search-([0-9]+)$/;
function matchDragEventData(event, pattern) {
    for (const type of event.dataTransfer.types) {
        const match = type.match(pattern)?.[1];
        if (match !== undefined) {
            return Number(match);
        }
    }
    return null;
}
function dragOver(event) {
    for (const type of event.dataTransfer.types) {
        if (type === 'Files' || searchPattern.test(type)) {
            event.dataTransfer.dropEffect = 'copy';
            event.preventDefault();
            return;
        }
        if (chartPattern.test(type)) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
            return;
        }
    }
}
export const EditorChartAlbumCover = ({ dispatch, album, size, highlighted }) => {
    const id = getAlbumID(album);
    function dragEnter(event) {
        const sourceID = matchDragEventData(event, chartPattern);
        if (sourceID === null) {
            return;
        }
        dispatch({
            tag: 'DragChartAlbum',
            sourceID,
            targetID: id
        });
        event.preventDefault();
    }
    function drop(event) {
        const file = event.dataTransfer.files[0];
        if (file !== undefined) {
            dispatch({
                tag: 'DropExternalFile',
                file,
                targetID: id
            });
            event.preventDefault();
            return;
        }
        const sourceIndex = matchDragEventData(event, searchPattern);
        if (sourceIndex === null) {
            return;
        }
        dispatch({
            tag: 'DropSearchAlbum',
            sourceIndex,
            targetID: id
        });
        event.preventDefault();
    }
    let dragStart;
    let buttons;
    if (!identifiedAlbumIsPlaceholder(album)) {
        dragStart = event => {
            event.dataTransfer.setData(`chart-${id}`, '');
            event.dataTransfer.effectAllowed = 'copyMove';
        };
        buttons = (_jsxs(_Fragment, { children: [_jsx(RenameAlbumButton, { dispatch: dispatch, id: id }, void 0), _jsx(DeleteAlbumButton, { dispatch: dispatch, id: id }, void 0)] }, void 0));
    }
    return (_jsx(ChartAlbumCover, Object.assign({ dispatch: dispatch, album: album, size: size, onDragStart: dragStart, onDragOver: dragOver, onDragEnter: dragEnter, onDrop: drop, highlighted: highlighted }, { children: buttons }), void 0));
};
//# sourceMappingURL=EditorChartAlbumCover.js.map