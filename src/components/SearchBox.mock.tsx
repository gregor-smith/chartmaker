import type { FC } from 'react'

import type { SearchBoxProps } from './SearchBox.js'


export const SearchBox: FC<SearchBoxProps> = ({ searchState }) => {
    const json = JSON.stringify(searchState)
    return (
        <div className='mock-search-box'>
            {`Search state: ${json}`}
        </div>
    )
}
