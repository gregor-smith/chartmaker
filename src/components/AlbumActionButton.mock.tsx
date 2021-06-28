const mock: typeof import('./AlbumActionButton.js') = {
    AlbumActionButton: props =>
        <div {...props} className='mock-album-action-button'/>
}


export const AlbumActionButton = mock.AlbumActionButton
