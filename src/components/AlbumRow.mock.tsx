const mock: typeof import('./AlbumRow.js') = {
    AlbumRow: ({ children }) =>
        <div className='mock-album-row'>
            {children}
        </div>
}


export const AlbumRow = mock.AlbumRow
