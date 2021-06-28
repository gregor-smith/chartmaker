import { ForwardedRef, forwardRef } from 'react'


const mock: typeof import('./Chart.js') = {
    Chart: forwardRef(({ name, children }, ref) =>
        <div ref={ref as ForwardedRef<HTMLDivElement>} className='mock-chart'>
            {`Name: ${name}`}
            {children}
        </div>
    )
}


export const Chart = mock.Chart
