import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupScrollAnimations } from './utils/scrollAnimation.js'

createApp(App).mount('#app')

// Setup scroll animations
setupScrollAnimations()
