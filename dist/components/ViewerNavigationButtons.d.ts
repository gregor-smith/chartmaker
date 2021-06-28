import type { FC } from 'react';
import type { DispatchProps } from '../reducer.js';
export declare type ViewerNavigationButtonsProps = DispatchProps & {
    importDisabled: boolean;
};
export declare const ViewerNavigationButtons: FC<ViewerNavigationButtonsProps>;
