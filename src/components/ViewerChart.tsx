import { forwardRef, PropsWithChildren } from 'react'

import type { DispatchProps } from '../reducer.js'
import type { Chart as ChartState } from '../types.js'
import { splitAlbumsAccordingToShape } from '../utils.js'
import { Chart } from './Chart.js'
import { ViewerAlbumRows } from './ViewerAlbumRows.js'
import { ViewerAlbumTitles } from './ViewerAlbumTitles.js'


export type ViewerChartProps =
    & DispatchProps
    & ChartState
    & {
        highlighted: number | null
    }


export const ViewerChart = forwardRef<HTMLElement, PropsWithChildren<ViewerChartProps>>(
    ({ dispatch, albums, highlighted, name, shape, size }, ref) => {
        const [ rows, groups ] = splitAlbumsAccordingToShape(
            albums,
            shape,
            size
        )

        return (
            <Chart ref={ref} name={name}>
                <ViewerAlbumRows dispatch={dispatch}
                    rows={rows}
                    highlighted={highlighted}/>
                <ViewerAlbumTitles dispatch={dispatch}
                    groups={groups}
                    highlighted={highlighted}/>
            </Chart>
        )
    }
)
