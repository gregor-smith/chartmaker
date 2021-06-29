import { cx } from 'emotion'
import type { CSSProperties, FC } from 'react'

import { buttonClassName } from '../style.js'


export type ButtonProps = {
    id?: string
    style?: CSSProperties
    className?: string
    disabled?: boolean
    onClick?: () => void
    title?: string
}


export const Button: FC<ButtonProps> = ({ className, ...props }) =>
    <button {...props} className={cx(buttonClassName(), className)}/>
