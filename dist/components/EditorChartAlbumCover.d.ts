import type { FC } from 'react';
import type { Album } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type EditorChartAlbumCoverProps = DispatchProps & {
    album: Album;
    size: string;
    highlighted: number | null;
};
export declare const EditorChartAlbumCover: FC<EditorChartAlbumCoverProps>;
