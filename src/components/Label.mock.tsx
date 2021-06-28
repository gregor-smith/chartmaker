import type { FC } from 'react'

import type { LabelProps } from './Label.js'


export const Label: FC<LabelProps> = ({ target, children }) =>
    <div className='mock-label'>
        {`Target: ${target}`}
        {children}
    </div>
