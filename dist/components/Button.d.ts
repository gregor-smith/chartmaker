import type { FC } from 'react';
export declare type ButtonProps = {
    id?: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    title?: string;
};
export declare const Button: FC<ButtonProps>;
