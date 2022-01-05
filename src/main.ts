import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)

  setupRouter(app)
  // 路由内容加载完成之后在挂载
  await router.isReady()
  app.mount('#app')
}

bootstrap()
