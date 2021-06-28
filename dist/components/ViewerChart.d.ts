/// <reference types="react" />
import type { DispatchProps } from '../reducer.js';
import type { Chart as ChartState } from '../types.js';
export declare type ViewerChartProps = DispatchProps & ChartState & {
    highlighted: number | null;
};
export declare const ViewerChart: import("react").ForwardRefExoticComponent<DispatchProps & {
    name: string;
    shape: [2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10];
    size: 40 | 42 | 100 | null;
    albums: (number | ({
        name: string;
        url: string;
    } & {
        id: number;
    }))[];
} & {
    highlighted: number | null;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
