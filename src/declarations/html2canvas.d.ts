declare module 'html2canvas' {
    const func: (
        element: HTMLElement,
        options?: {
            allowTaint?: boolean,
            scale?: number,
            useCORS?: boolean,
            imageTimeout?: number,
            backgroundColor?: string
        }
    ) => Promise<HTMLCanvasElement>
    export default func
}
