const mock: typeof import('./APIKeyInput.js') = {
    id: 'apiKeyInput',

    APIKeyInput: ({ apiKey }) =>
        <div className='mock-api-key-input'>
            {`API Key: ${apiKey}`}
        </div>
}


export const APIKeyInput = mock.APIKeyInput
