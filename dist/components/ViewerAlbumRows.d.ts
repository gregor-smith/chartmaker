import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import { AlbumRow as RowState } from '../utils.js';
export declare type ViewerAlbumRowsProps = DispatchProps & {
    rows: RowState[];
    highlighted: number | null;
};
export declare const ViewerAlbumRows: FC<ViewerAlbumRowsProps>;
