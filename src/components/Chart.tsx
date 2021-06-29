import { CSSProperties, forwardRef, PropsWithChildren } from 'react'

import { CONTAINER_PADDING_SIZE, BORDER } from '../style.js'


const headerStyle: CSSProperties = {
    fontSize: '2rem'
}


const outContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: CONTAINER_PADDING_SIZE,
    border: BORDER
}


const innerContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start'
}


export type ChartProps = {
    name: string
}


export const Chart = forwardRef<HTMLElement, PropsWithChildren<ChartProps>>(
    ({ name, children }, ref) =>
        <main ref={ref} style={outContainerStyle}>
            <h1 style={headerStyle}>
                {name}
            </h1>
            <div style={innerContainerStyle}>
                {children}
            </div>
        </main>
)
