// 프로젝트 전체에서 사용할 CSS 파일 로드.
// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';

import { createApp } from 'vue';

// 프로젝트 전체에 세팅을 정의. setting 로직과 view 로직이 혼합되면 유지 관리가 어려움.
// 따라서 main view 파일을 분리. main.js는 프로젝트 전체에 대한 설정만 담당.

// 라우터 설정
// vuex, pinia 설정
// plugin 설정
// i18n 다국어 설정...

import App from './App.vue';
createApp(App).mount('#app');
