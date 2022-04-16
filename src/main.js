import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router";
import axios from "./axios";

let app = createApp(App)
app.config.globalProperties.$axios=axios

app.use(ElementPlus).use(router).mount('#app')
