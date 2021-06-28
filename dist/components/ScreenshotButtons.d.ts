import type { FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import { ScreenshotState } from '../types.js';
export declare const sliderID = "screenshotScale";
export declare const buttonID = "screenshot";
export declare type ScreenshotButtonsProps = DispatchProps & {
    screenshotState: ScreenshotState;
    chartRef: RefObject<HTMLElement>;
};
export declare const ScreenshotButtons: FC<ScreenshotButtonsProps>;
