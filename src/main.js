import { createApp } from 'vue'
import App from './App.vue'
// 全局引用pinia
import pinia from './stores'

createApp(App).use(pinia).mount('#app')
