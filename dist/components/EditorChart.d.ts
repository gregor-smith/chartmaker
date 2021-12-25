/// <reference types="react" />
import type { Chart as ChartState } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type EditorChartProps = DispatchProps & ChartState & {
    highlighted: number | null;
};
export declare const EditorChart: import("react").ForwardRefExoticComponent<DispatchProps & {
    name: string;
    size: 100 | 40 | 42 | null;
    shape: [2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10];
    albums: (number | ({
        url: string;
        name: string;
    } & {
        id: number;
    }))[];
} & {
    highlighted: number | null;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
