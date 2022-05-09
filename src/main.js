import {createApp} from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "./axios"
import {createPinia} from "pinia"
import animated from "animate.css"
import {i18n} from './i18n'

let app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(createPinia())
    .use(router)
    .use(i18n)
    .mount('#app')
