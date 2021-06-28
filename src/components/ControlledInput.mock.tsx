import type { FC, ChangeEvent } from 'react'

import type { ControlledInputProps } from './ControlledInput.js'


export const ControlledInput: FC<ControlledInputProps> = ({
    id,
    type,
    value,
    onChange,
    disabled
}) => {
    function change(event: ChangeEvent<HTMLDivElement>) {
        onChange((event.target as any).value)
    }

    return (
        <div id={id} className='mock-controlled-input' onChange={change}>
            {`Type: ${type}`}
            {`Value: ${value}`}
            {`Disabled: ${disabled}`}
        </div>
    )
}
