import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { reveal } from './reveal-MISSING.js'

createApp(App).directive('reveal', reveal).mount('#app')
