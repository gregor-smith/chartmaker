const mock: typeof import('./AlbumRowsContainer.js') = {
    id: 'rows',

    AlbumRowsContainer: ({ children }) =>
        <div className='mock-album-rows-container'>
            {children}
        </div>
}


export const id = mock.id
export const AlbumRowsContainer = mock.AlbumRowsContainer
