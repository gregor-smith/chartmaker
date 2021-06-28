import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type MoveChartButtonProps = DispatchProps & {
    direction: 'Up' | 'Down';
    disabled: boolean;
};
export declare const MoveChartButton: FC<MoveChartButtonProps>;
