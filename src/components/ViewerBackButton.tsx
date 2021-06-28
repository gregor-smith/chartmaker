import type { FC } from 'react'
import { css } from 'emotion'

import type { DispatchProps } from '../reducer.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { ViewerNavigationLink } from './ViewerNavigationLink.js'


export type ViewerBackButtonProps = DispatchProps


const style = css({
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
})


export const ViewerBackButton: FC<ViewerBackButtonProps> = ({ dispatch }) =>
    <ViewerNavigationLink className={style} dispatch={dispatch}>
        Back
    </ViewerNavigationLink>
