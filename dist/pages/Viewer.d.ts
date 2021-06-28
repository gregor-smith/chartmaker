import type { FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart, ScreenshotState } from '../types.js';
export declare type ViewerProps = DispatchProps & {
    chartRef: RefObject<HTMLElement>;
    chart: Chart | null;
    screenshotState: ScreenshotState;
    highlighted: number | null;
};
export declare const Viewer: FC<ViewerProps>;
