import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

let app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .mount('#app')
