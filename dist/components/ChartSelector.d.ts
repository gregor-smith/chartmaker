import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart } from '../types.js';
export declare const id = "chartSelector";
export declare type ChartSelectorProps = DispatchProps & {
    charts: Chart[];
    activeChartIndex: number;
};
export declare const ChartSelector: FC<ChartSelectorProps>;
