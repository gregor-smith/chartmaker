import type { CSSProperties, FC } from 'react'

import { SIDEBAR_LABEL_PADDING_SIZE } from '../style.js'


export type LabelProps = {
    target: string
}


const style: CSSProperties = {
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE
}


export const Label: FC<LabelProps> = ({ children, target }) =>
    <label style={style} htmlFor={target}>
        {children}
    </label>
