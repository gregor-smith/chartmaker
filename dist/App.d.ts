import { FC, ComponentType } from 'react';
import type { Searcher } from './types.js';
import { APIKeyInputProps } from './components/APIKeyInput.js';
import { CopyLinkButtonProps } from './components/CopyLinkButton.js';
export declare type AppProps = {
    searcher?: Searcher;
    keyInputComponent?: ComponentType<APIKeyInputProps>;
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>;
};
export declare const App: FC<AppProps>;
