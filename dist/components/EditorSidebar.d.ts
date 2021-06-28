import type { FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart, SearchState, ScreenshotState } from '../types.js';
export declare type EditorSidebarProps = DispatchProps & {
    charts: Chart[];
    activeChartIndex: number;
    apiKey: string;
    searchState: SearchState;
    screenshotState: ScreenshotState;
    chartRef: RefObject<HTMLElement>;
    showAPIKeyInput: boolean;
    showCopyLinkButton: boolean;
};
export declare const EditorSidebar: FC<EditorSidebarProps>;
