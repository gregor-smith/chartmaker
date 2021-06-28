import type { FC, RefObject } from 'react';
import type { ScreenshotState } from '../types.js';
import type { DispatchProps } from '../reducer.js';
export declare type ViewerSidebarProps = DispatchProps & {
    screenshotState: ScreenshotState;
    chartRef: RefObject<HTMLElement>;
    importDisabled: boolean;
};
export declare const ViewerSidebar: FC<ViewerSidebarProps>;
