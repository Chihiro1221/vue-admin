import vue from '@vitejs/plugin-vue'
import { setupMockPlugins } from './mock'
export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
    const plugins = [vue()]
    plugins.push(setupMockPlugins(isBuild))
    return plugins
}
