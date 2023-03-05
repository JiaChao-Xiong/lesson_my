import { createApp } from 'vue'
import router from './router'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/css/index.styl'
import '@/theme/index.styl'

const app = createApp(App)
app
    .use(createPinia())
    .use(router)    
    .mount('#app')
