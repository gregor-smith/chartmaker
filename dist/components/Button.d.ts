import type { CSSProperties, FC } from 'react';
export declare type ButtonProps = {
    id?: string;
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    title?: string;
};
export declare const Button: FC<ButtonProps>;
