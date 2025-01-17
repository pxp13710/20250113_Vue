import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

// store
import store from './stores';

const app = createApp(App);
app.use(store);               // store 등록

app.mount('#app')
