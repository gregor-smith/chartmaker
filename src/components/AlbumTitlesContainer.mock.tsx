const mock: typeof import('./AlbumTitlesContainer.js') = {
    id: 'titles',

    AlbumTitlesContainer: ({ children }) =>
        <div className='mock-album-titles-container'>
            {children}
        </div>
}


export const AlbumTitlesContainer = mock.AlbumTitlesContainer
