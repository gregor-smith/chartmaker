import type { CSSProperties, FC } from 'react'


const style: CSSProperties = {
    background: 'none',
    border: 0,
    padding: 0
}


export type AlbumActionButtonProps = {
    onClick: () => void
    title: string
}


export const AlbumActionButton: FC<AlbumActionButtonProps> = props =>
    <button {...props} style={style}/>
