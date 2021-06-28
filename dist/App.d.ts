import { FC } from 'react';
import type { Searcher } from './types.js';
export declare type AppProps = {
    searcher?: Searcher;
    showAPIKeyInput?: boolean;
    showCopyLinkButton?: boolean;
};
export declare const App: FC<AppProps>;
