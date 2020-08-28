import React, { FC } from 'react'
import { css } from 'emotion'

import { SIDEBAR_LABEL_PADDING_SIZE, ERROR_TEXT_COLOUR } from '@/style'
import { Label } from '@/components/Label'
import { ControlledForm } from '@/components/ControlledForm'
import { SidebarGroup } from '@/components/SidebarGroup'
import { ControlledInput } from '@/components/ControlledInput'
import { useDispatch, useSelector } from '@/reducer'
import { cancelSearchRequest, sendSearchRequest } from '@/thunks'


export const id = 'search'


const errorStyle = css({
    color: ERROR_TEXT_COLOUR,
    marginBottom: SIDEBAR_LABEL_PADDING_SIZE,
    userSelect: 'none'
})


export const SearchBox: FC = () => {
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)

    function dispatchSearch() {
        dispatch(cancelSearchRequest())
        dispatch(sendSearchRequest())
    }

    function updateQuery(query: string) {
        dispatch({
            type: 'UpdateSearchQuery',
            query
        })
    }

    const errorMessage = searchState.tag === 'Error'
        ? (
            <div className={errorStyle}>
                {searchState.message}
            </div>
        )
        : null

    return (
        <SidebarGroup>
            <ControlledForm onSubmit={dispatchSearch}>
                <Label target={id}>
                    Search for albums
                </Label>
                {errorMessage}
                <ControlledInput id={id}
                    value={searchState.query}
                    onChange={updateQuery}
                    disabled={searchState.tag === 'Loading'}/>
            </ControlledForm>
        </SidebarGroup>
    )
}
