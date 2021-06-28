import type { FC } from 'react';
export declare type ControlledRadioButtonProps = {
    id: string;
    checked: boolean;
    onCheck: () => void;
};
export declare const ControlledRadioButton: FC<ControlledRadioButtonProps>;
