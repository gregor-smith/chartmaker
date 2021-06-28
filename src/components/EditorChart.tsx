import { forwardRef, PropsWithChildren } from 'react'

import type { Chart as ChartState } from '../types.js'
import type { DispatchProps } from '../reducer.js'
import { Chart } from './Chart.js'
import { splitAlbumsAccordingToShape } from '../utils.js'
import { EditorAlbumRows } from './EditorAlbumRows.js'
import { EditorAlbumTitles } from './EditorAlbumTitles.js'


export type EditorChartProps =
    & DispatchProps
    & ChartState
    & {
        highlighted: number | null
    }


export const EditorChart = forwardRef<HTMLElement, PropsWithChildren<EditorChartProps>>(
    ({ dispatch, albums, highlighted, name, shape, size }, ref) => {
        const [ rows, groups ] = splitAlbumsAccordingToShape(
            albums,
            shape,
            size
        )

        return (
            <Chart ref={ref} name={name}>
                <EditorAlbumRows dispatch={dispatch}
                    rows={rows}
                    highlighted={highlighted}/>
                <EditorAlbumTitles dispatch={dispatch}
                    groups={groups}
                    highlighted={highlighted}/>
            </Chart>
        )
    }
)
