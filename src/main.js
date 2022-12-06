import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import uiComonents from './ui-comonents'

const app = createApp(App)
app.use(store)
uiComonents.map(el => app.component(el.name, el))
app.use(router)
app.mount('#app')
