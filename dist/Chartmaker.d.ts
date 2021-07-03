import 'bootstrap/scss/bootstrap-reboot.scss';
import { ComponentType } from 'react';
import { CreateReducerOptions } from './reducer.js';
import type { APIKeyInputProps } from './components/APIKeyInput.js';
import type { CopyLinkButtonProps } from './components/CopyLinkButton.js';
export declare type ChartmakerProps = CreateReducerOptions & {
    keyInputComponent?: ComponentType<APIKeyInputProps>;
    copyLinkComponent?: ComponentType<CopyLinkButtonProps>;
};
export declare function Chartmaker({ copyLinkComponent, keyInputComponent, ...reducerOptions }: ChartmakerProps): JSX.Element;
