import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import { createPinia } from 'pinia';
import Notifications from 'notiwind'

const app = createApp(App);

app.use(createPinia());
app.use(Notifications);
initializeRouter(app);
app.mount('#app');
