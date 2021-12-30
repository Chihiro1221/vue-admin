interface ViteEnv {
    VITE_ROUTE_AUTOLOAD: boolean
    VITE_SOME_KEY: number
    VITE_BASE_URL: string
    VITE_URL?: string
}
interface ImportMetaEnv extends ViteEnv {}
