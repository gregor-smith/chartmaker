/// <reference types="react" />
import type { Chart as ChartState } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type EditorChartProps = DispatchProps & ChartState & {
    highlighted: number | null;
};
export declare const EditorChart: import("react").ForwardRefExoticComponent<DispatchProps & {
    name: string;
    shape: [2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3, 2 | 1 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3];
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
