import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type ViewerNavigationLinkProps = DispatchProps & {
    className?: string;
    onClick?: () => void;
};
export declare const ViewerNavigationLink: FC<ViewerNavigationLinkProps>;
