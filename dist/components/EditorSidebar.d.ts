import type { ComponentType, FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { Chart, SearchState, ScreenshotState } from '../types.js';
import { APIKeyInputProps } from './APIKeyInput.js';
import { CopyLinkButtonProps } from './CopyLinkButton.js';
export declare type EditorSidebarProps = DispatchProps & {
    charts: Chart[];
    activeChartIndex: number;
    apiKey: string;
    searchState: SearchState;
    screenshotState: ScreenshotState;
    chartRef: RefObject<HTMLElement>;
    keyInputComponent?: ComponentType<APIKeyInputProps>;
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>;
};
export declare const EditorSidebar: FC<EditorSidebarProps>;
