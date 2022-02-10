import vue from '@vitejs/plugin-vue'
import { setupMockPlugins } from './mock'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from './autoImport'

export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins = [vue()]
  plugins.push(setupMockPlugins(isBuild))
  plugins.push(visualizer())
  plugins.push(...autoImport())

  return plugins
}
