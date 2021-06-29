import type { FC, ChangeEvent } from 'react'

import { inputClassName } from '../style.js'


export type ControlledSelectProps = {
    id?: string
    value: number
    onChange: (value: number) => void
}


export const ControlledSelect: FC<ControlledSelectProps> = ({ onChange, ...props }) => {
    function change(event: ChangeEvent<HTMLSelectElement>) {
        event.preventDefault()
        const value = Number(event.target.value)
        onChange(value)
    }

    return <select {...props} className={inputClassName()} onChange={change}/>
}
