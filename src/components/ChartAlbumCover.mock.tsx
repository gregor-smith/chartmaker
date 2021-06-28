const mock: typeof import('./ChartAlbumCover.js') = {
    ChartAlbumCover: ({ album, size, highlighted, children, ...props }) => {
        const json = JSON.stringify(album)
        return (
            <div {...props} className='mock-chart-album-cover'>
                {`Album: ${json}`}
                {`Size: ${size}`}
                {`Highlighted: ${highlighted}`}
                {children}
            </div>
        )
    }
}


export const ChartAlbumCover = mock.ChartAlbumCover
