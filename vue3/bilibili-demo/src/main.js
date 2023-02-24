import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .mount('#app')
