import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugins(isBuild: boolean) {
    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: !isBuild,
    })
}
