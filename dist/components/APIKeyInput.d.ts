import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare const id = "apiKeyInput";
export declare type APIKeyInputProps = DispatchProps & {
    apiKey: string;
};
export declare const APIKeyInput: FC<APIKeyInputProps>;
