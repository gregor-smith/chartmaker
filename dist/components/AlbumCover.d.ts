import type { FC, DragEvent } from 'react';
import type { UnidentifiedAlbum } from '../types.js';
export declare type AlbumCoverProps = {
    album: UnidentifiedAlbum;
    size: string;
    onDragStart?: (event: DragEvent<HTMLDivElement>) => void;
    onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
    onDragEnter?: (event: DragEvent<HTMLDivElement>) => void;
    onDrop?: (event: DragEvent<HTMLDivElement>) => void;
    onMouseEnter?: () => void;
    overlayClass?: string;
    highlighted?: boolean;
};
export declare const AlbumCover: FC<AlbumCoverProps>;
