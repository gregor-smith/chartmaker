import type { CSSProperties, FC } from 'react'
import { css } from 'emotion'

import { SIDEBAR_LABEL_PADDING_SIZE, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { Label } from './Label.js'


export type ControlledRadioButtonProps = {
    id: string
    checked: boolean
    onCheck: () => void
}


const inputStyle: CSSProperties = {
    marginRight: SIDEBAR_LABEL_PADDING_SIZE
}


export const ControlledRadioButton: FC<ControlledRadioButtonProps> = ({
    id,
    checked,
    onCheck,
    children
}) => {
    const containerClassName = css({
        display: 'flex',
        alignItems: 'center',
        ':not(:first-of-type)': {
            marginLeft: SIDEBAR_ITEM_PADDING_SIZE
        },
        ':not(:last-of-type)': {
            marginRight: SIDEBAR_ITEM_PADDING_SIZE
        }
    })
    return (
        <div className={containerClassName}>
            <input id={id}
                style={inputStyle}
                type='radio'
                checked={checked}
                onChange={onCheck}/>
            <Label target={id}>
                {children}
            </Label>
        </div>
    )
}
