import type { FC, ChangeEvent, CSSProperties } from 'react'
import { css, cx } from 'emotion'

import { inputClassName, SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { Label } from './Label.js'


export type ControlledSliderProps = {
    id: string
    min: number
    max: number
    step: number
    value: number
    onChange: (value: number) => void
    disabled?: boolean
}


const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
}

export const ControlledSlider: FC<ControlledSliderProps> = ({
    id,
    onChange,
    children,
    value,
    ...props
}) => {
    function change(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const value = Number(event.target.value)
        onChange(value)
    }

    const className = cx(
        css({
            margin: `0 ${SIDEBAR_ITEM_PADDING_SIZE}`
        }),
        inputClassName()
    )

    return (
        <div style={containerStyle}>
            <Label target={id}>
                {children}
            </Label>
            <input {...props}
                id={id}
                className={className}
                type='range'
                onChange={change}
                value={value}/>
            <Label target={id}>
                {value}
            </Label>
        </div>
    )
}
