import type { FC, Ref } from 'react'

import type { Chart as ChartState } from '@/types'
import type { DispatchProps } from '@/reducer'
import { Chart } from '@/components/Chart'
import { splitAlbumsAccordingToShape } from '@/state'
import { EditorAlbumRows } from '@/components/EditorAlbumRows'
import { EditorAlbumTitles } from '@/components/EditorAlbumTitles'


export type EditorChartProps =
    & DispatchProps
    & ChartState
    & {
        innerRef: Ref<HTMLElement>
        highlighted: number | undefined
    }


export const EditorChart: FC<EditorChartProps> = ({
    dispatch,
    albums,
    highlighted,
    innerRef,
    name,
    rowsX,
    rowsY,
    shape
}) => {
    const [ rows, groups ] = splitAlbumsAccordingToShape(
        albums,
        shape,
        rowsX,
        rowsY
    )

    return (
        <Chart innerRef={innerRef} name={name}>
            <EditorAlbumRows dispatch={dispatch}
                rows={rows}
                highlighted={highlighted}/>
            <EditorAlbumTitles dispatch={dispatch}
                groups={groups}
                highlighted={highlighted}/>
        </Chart>
    )
}