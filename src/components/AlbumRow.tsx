import type { CSSProperties, FC } from 'react'


const style: CSSProperties = {
    display: 'flex'
}


export const AlbumRow: FC = ({ children }) =>
    <div style={style}>
        {children}
    </div>
