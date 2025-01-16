import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

// router
// import 할 파일명이 index.js, index.json의 경우 폴더명까지만 기술한다. (파일명을 기술해도 됨) 
import router from './router';

const app = createApp(App);
app.use(router);

app.mount('#app')
