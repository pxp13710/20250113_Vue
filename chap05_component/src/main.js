import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

import PortalVue from 'portal-vue'
// Vue.use(PortalVue);                // 2.X

const app = createApp(App);
app.use(PortalVue);                   // 3.X

// 프로젝트 전체 에러 처리
// ErrorBoundry
app.config.errorHandler = (err, errComp, info) => {
  console.log('----------- Main -----------');
  console.log(err);
  console.log(errComp);
  console.log(info);

  // 여기서는 return 값이 존재하지 않는다 (최 상위)
}

// 프로젝트 전체의 경고 처리
app.config.warnHandler = (warn, warnComp, info) => {
  console.warn('----------- Main -----------');
  console.warn(warn);
  console.warn(warnComp);
  console.warn(info);
}
app.mount('#app');
