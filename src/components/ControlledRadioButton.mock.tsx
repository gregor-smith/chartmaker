import type { FC } from 'react'

import type { ControlledRadioButtonProps } from './ControlledRadioButton.js'


export const ControlledRadioButton: FC<ControlledRadioButtonProps> = ({
    id,
    checked,
    onCheck,
    children
}) =>
    <div id={id} className='mock-controlled-radio-button' onChange={onCheck}>
        {`Checked: ${checked}`}
        {children}
    </div>
