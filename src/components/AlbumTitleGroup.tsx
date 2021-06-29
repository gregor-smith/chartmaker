import type { CSSProperties, FC } from 'react'

import { TITLES_PADDING_SIZE, TITLES_FONT_SIZE } from '../style.js'


const style: CSSProperties = {
    marginBottom: TITLES_PADDING_SIZE,
    fontSize: TITLES_FONT_SIZE
}


export const AlbumTitleGroup: FC = ({ children }) =>
    <div style={style}>
        {children}
    </div>
