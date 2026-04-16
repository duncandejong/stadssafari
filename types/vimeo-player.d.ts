declare module '@vimeo/player' {
    export default class Player {
        constructor(
            element: HTMLElement | string,
            options?: {
                id?: number
                url?: string
                width?: number
                loop?: boolean
                autoplay?: boolean
                background?: boolean
                responsive?: boolean
                dnt?: boolean
                muted?: boolean
            }
        )

        play(): Promise<void>
        pause(): Promise<void>
        ready(): Promise<void>
        unload(): Promise<void>

        setVolume(volume: number): Promise<void>
        getVideoTitle(): Promise<string>
        on(event: string, callback: (...args: any[]) => void): void
    }
}