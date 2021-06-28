import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type AlbumTitleProps = DispatchProps & {
    id: number;
    name: string;
    highlighted: number | null;
};
export declare const AlbumTitle: FC<AlbumTitleProps>;
