import type { CSSProperties, FC } from 'react'

import type { DispatchProps } from '../reducer.js'
import { SIDEBAR_LABEL_PADDING_SIZE, ERROR_TEXT_COLOUR } from '../style.js'
import type { SearchState } from '../types.js'
import { Label } from './Label.js'
import { ControlledForm } from './ControlledForm.js'
import { SidebarGroup } from './SidebarGroup.js'
import { ControlledInput } from './ControlledInput.js'


export const id = 'search'


export type SearchBoxProps = DispatchProps & {
    searchState: SearchState
}


const errorStyle: CSSProperties = {
    color: ERROR_TEXT_COLOUR,
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE,
    userSelect: 'none'
}


export const SearchBox: FC<SearchBoxProps> = ({ dispatch, searchState }) => {
    function sendSearchRequest() {
        dispatch({ tag: 'CancelSearchRequest' })
        dispatch({ tag: 'SendSearchRequest' })
    }

    function updateQuery(query: string) {
        dispatch({
            tag: 'UpdateSearchQuery',
            query
        })
    }

    let errorMessage: JSX.Element | undefined
    if (searchState.tag === 'Error') {
        errorMessage = (
            <div style={errorStyle}>
                {searchState.message}
            </div>
        )
    }

    return (
        <SidebarGroup>
            <ControlledForm onSubmit={sendSearchRequest}>
                <Label target={id}>
                    Search for albums
                </Label>
                {errorMessage}
                <ControlledInput id={id}
                    type='search'
                    value={searchState.query}
                    onChange={updateQuery}
                    disabled={searchState.tag === 'Loading'}/>
            </ControlledForm>
        </SidebarGroup>
    )
}
