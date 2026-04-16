// ~/types/global.d.ts
declare global {
    interface Window {
        MooVee?: {
            init?: (cfg?: any) => void
            destroy?: () => void
        }
        dataLayer: any[]
    }
}
export {}