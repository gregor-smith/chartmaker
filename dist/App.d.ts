import 'bootstrap/scss/bootstrap-reboot.scss';
import { FC, ComponentType } from 'react';
import type { Searcher } from './types.js';
import { APIKeyInputProps } from './components/APIKeyInput.js';
import { CopyLinkButtonProps } from './components/CopyLinkButton.js';
export type { Searcher, SearcherArguments } from './types.js';
export type { APIKeyInputProps as KeyInputComponentProps } from './components/APIKeyInput.js';
export type { CopyLinkButtonProps as CopyLinkComponentProps } from './components/CopyLinkButton.js';
export declare type AppProps = {
    searcher?: Searcher;
    keyInputComponent?: ComponentType<APIKeyInputProps>;
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>;
};
export declare const App: FC<AppProps>;
