interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_BASE_URL: string;
  VITE_MOCK_PROD: boolean;
}
interface ImportMetaEnv extends ViteEnv {}
