import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import { CollageSize, TopSize } from '../types.js';
export declare type ChartShapeControlsProps = DispatchProps & {
    shape: CollageSize;
    size: TopSize | null;
};
export declare const ChartShapeControls: FC<ChartShapeControlsProps>;
