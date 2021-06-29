import type { CSSProperties, FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type ViewerNavigationLinkProps = DispatchProps & {
    style?: CSSProperties;
    onClick?: () => void;
};
export declare const ViewerNavigationLink: FC<ViewerNavigationLinkProps>;
