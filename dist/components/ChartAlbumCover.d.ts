import type { FC } from 'react';
import { AlbumCoverProps } from './AlbumCover.js';
import type { Album } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type ChartAlbumCoverProps = DispatchProps & Omit<AlbumCoverProps, 'overlayClass' | 'album' | 'onMouseEnter' | 'highlighted'> & {
    album: Album;
    highlighted: number | null;
};
export declare const ChartAlbumCover: FC<ChartAlbumCoverProps>;
