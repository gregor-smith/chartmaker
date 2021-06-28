const mock: typeof import('./AlbumTitleGroup.js') = {
    AlbumTitleGroup: ({ children }) =>
        <div className='mock-album-title-group'>
            {children}
        </div>
}


export const AlbumTitleGroup = mock.AlbumTitleGroup
