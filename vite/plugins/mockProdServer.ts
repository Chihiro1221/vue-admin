import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager('../../mock/**/*.ts');
const mockModules: any[] = [];

Object.values(modules).forEach(module => {
  mockModules.push(...module.default);
});

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
