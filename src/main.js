import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import './assets/css/normalize.css'
import './assets/css/style.css'
import 'material-design-icons-iconfont'

createApp(App).use(store).use(router).mount('#app')