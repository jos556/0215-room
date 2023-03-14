import { createApp } from 'vue'
import '../style.css'
import App from './App.vue'
import"bootstrap/dist/css/bootstrap.min.css";
import"bootstrap"

import Particles from 'particles.vue3'


createApp(App).use(Particles).mount('#app');