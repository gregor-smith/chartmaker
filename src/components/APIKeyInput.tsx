import React, { FC } from 'react'

import { useDispatch, useSelector } from '@/reducer'
import { SidebarGroup } from '@/components/SidebarGroup'
import { Label } from '@/components/Label'
import { ControlledInput } from '@/components/ControlledInput'


export const id = 'apiKeyInput'


export const APIKeyInput: FC = () => {
    const dispatch = useDispatch()
    const apiKey = useSelector(state => state.apiKey)

    function updateAPIKey(apiKey: string) {
        dispatch({ type: 'UpdateAPIKey', apiKey })
    }

    return (
        <SidebarGroup>
            <Label target={id}>
                Last.fm API key
            </Label>
            <ControlledInput id={id}
                type='password'
                value={apiKey}
                onChange={updateAPIKey}/>
        </SidebarGroup>
    )
}


export default APIKeyInput
