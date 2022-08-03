import { viteMockServe } from 'vite-plugin-mock';
export function setupMockPlugins(isBuild: boolean) {
  const isEnableProdMock = true;
  return viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled: !isBuild,
    // 生产环境下启动
    prodEnabled: isBuild && isEnableProdMock,
    injectCode: `
      import { setupProdMockServer } from '../vite/plugins/mockProdServer';
      setupProdMockServer();
    `,
  });
}
