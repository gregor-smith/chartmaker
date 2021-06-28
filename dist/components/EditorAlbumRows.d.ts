import type { FC } from 'react';
import { AlbumRow as RowState } from '../utils.js';
import type { DispatchProps } from '../reducer.js';
export declare type EditorAlbumRowsProps = DispatchProps & {
    rows: RowState[];
    highlighted: number | null;
};
export declare const EditorAlbumRows: FC<EditorAlbumRowsProps>;
