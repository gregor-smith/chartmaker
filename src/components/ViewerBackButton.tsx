import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { ViewerNavigationLink } from './ViewerNavigationLink.js'


export type ViewerBackButtonProps = DispatchProps


const style: CSSProperties = {
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
}


export const ViewerBackButton: FC<ViewerBackButtonProps> = ({ dispatch }) =>
    <ViewerNavigationLink style={style} dispatch={dispatch}>
        Back
    </ViewerNavigationLink>
