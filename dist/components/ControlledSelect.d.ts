import type { FC } from 'react';
export declare type ControlledSelectProps = {
    id?: string;
    value: number;
    onChange: (value: number) => void;
};
export declare const ControlledSelect: FC<ControlledSelectProps>;
