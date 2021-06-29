import { FC, useRef, ChangeEvent, CSSProperties } from 'react'

import type { DispatchProps } from '../reducer.js'
import { SIDEBAR_ITEM_PADDING_SIZE } from '../style.js'
import { Button } from './Button.js'


export type LoadStateButtonProps = DispatchProps


const inputStyle: CSSProperties = {
    display: 'none'
}


const buttonStyle: CSSProperties = {
    marginRight: SIDEBAR_ITEM_PADDING_SIZE
}


export const LoadStateButton: FC<LoadStateButtonProps> = ({ dispatch }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    function loadSelectedFile(event: ChangeEvent<HTMLInputElement>) {
        // files are accessed through the event rather than the ref for easier
        // mocking during testing
        const file = event.target.files?.[0]
        if (file === undefined) {
            return
        }
        dispatch({
            tag: 'LoadStateFile',
            file
        })
    }

    function clickInput() {
        inputRef.current?.click()
    }

    return (
        <>
            <input ref={inputRef}
                style={inputStyle}
                type='file'
                accept='application/json'
                onChange={loadSelectedFile}/>
            <Button style={buttonStyle} onClick={clickInput}>
                Load state
            </Button>
        </>
    )
}
