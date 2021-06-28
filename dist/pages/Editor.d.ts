import type { FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { State } from '../types.js';
export declare type EditorProps = DispatchProps & Omit<State, 'version' | 'viewing'> & {
    chartRef: RefObject<HTMLElement>;
    showCopyLinkButton: boolean;
    showAPIKeyInput: boolean;
};
export declare const Editor: FC<EditorProps>;
