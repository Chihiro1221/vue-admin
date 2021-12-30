import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'

export default ({ command, mode }: ConfigEnv) => {
    const isBuild = command === 'build'
    // 获取项目根目录
    const root = process.cwd()
    // 解析env文件
    const env = parseEnv(loadEnv(mode, root))
    return {
        // plugins: [vue()],
        plugins: setupPlugins(isBuild, env),
        resolve: {
            alias,
        },
    }
}
