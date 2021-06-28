import type { FC } from 'react';
export declare type ControlledSliderProps = {
    id: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
    disabled?: boolean;
};
export declare const ControlledSlider: FC<ControlledSliderProps>;
