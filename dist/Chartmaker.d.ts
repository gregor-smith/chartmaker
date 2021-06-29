import 'bootstrap/scss/bootstrap-reboot.scss';
import { FC, ComponentType } from 'react';
import type { Searcher } from './types.js';
import { APIKeyInputProps } from './components/APIKeyInput.js';
import { CopyLinkButtonProps } from './components/CopyLinkButton.js';
export declare type ChartmakerProps = {
    searcher?: Searcher;
    keyInputComponent?: ComponentType<APIKeyInputProps>;
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>;
};
export declare const Chartmaker: FC<ChartmakerProps>;
