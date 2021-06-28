import type { FC } from 'react';
import type { NamedAlbum } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type EditorAlbumTitlesProps = DispatchProps & {
    groups: NamedAlbum[][];
    highlighted: number | null;
};
export declare const EditorAlbumTitles: FC<EditorAlbumTitlesProps>;
