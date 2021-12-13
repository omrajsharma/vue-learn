import { createApp } from 'vue';
const app = createApp(App)

import App from './App.vue';
import router from './router.js';

app.use(router);

app.mount('#app');