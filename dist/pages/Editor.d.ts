import type { ComponentType, FC, RefObject } from 'react';
import type { DispatchProps } from '../reducer.js';
import type { State } from '../types.js';
import type { APIKeyInputProps } from '../components/APIKeyInput.js';
import type { CopyLinkButtonProps } from '../components/CopyLinkButton.js';
export declare type EditorProps = DispatchProps & Omit<State, 'version' | 'viewing'> & {
    chartRef: RefObject<HTMLElement>;
    keyInputComponent: ComponentType<APIKeyInputProps>;
    copyLinkComponent: ComponentType<CopyLinkButtonProps>;
};
export declare const Editor: FC<EditorProps>;
