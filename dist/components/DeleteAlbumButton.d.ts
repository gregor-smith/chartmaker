import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type DeleteAlbumButtonProps = DispatchProps & {
    id: number;
};
export declare const DeleteAlbumButton: FC<DeleteAlbumButtonProps>;
