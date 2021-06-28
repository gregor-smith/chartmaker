import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart } from '../types.js';
export declare type ChartManagerProps = DispatchProps & {
    charts: Chart[];
    activeChartIndex: number;
};
export declare const ChartManager: FC<ChartManagerProps>;
