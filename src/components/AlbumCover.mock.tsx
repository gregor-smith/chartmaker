const mock: typeof import('./AlbumCover.js') = {
    AlbumCover: ({
        album,
        size,
        children,
        highlighted,
        ...props
    }) => {
        const json = JSON.stringify(album)
        return (
            <div {...props} className='mock-album-cover'>
                {`Album: ${json}`}
                {`Size: ${size}`}
                {`Highlighted: ${highlighted}`}
                {children}
            </div>
        )
    }
}


export const AlbumCover = mock.AlbumCover
