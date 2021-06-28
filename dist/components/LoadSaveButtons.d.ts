import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart } from '../types.js';
export declare type LoadSaveButtonsProps = DispatchProps & {
    chart: Chart;
    showCopyLinkButton: boolean;
};
export declare const LoadSaveButtons: FC<LoadSaveButtonsProps>;
