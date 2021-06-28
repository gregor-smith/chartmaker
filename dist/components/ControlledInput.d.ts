import type { FC } from 'react';
export declare type ControlledInputProps = {
    id: string;
    type: 'search' | 'password';
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
};
export declare const ControlledInput: FC<ControlledInputProps>;
