// router 설정
import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from './path';

import A01Binding from './../views/A01Binding.vue';
import A02Attribute from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05ContactChild from './../views/A05ContactChild.vue';
import A06Query from './../views/A06Query.vue';
import A07Push from './../views/A07Push.vue';
import A08ChildRouter from './../views/A08ChildRouter.vue';
import A09NotFound from './../views/A09NotFound.vue';
import CompanyInfo from './../components/CompanyInfo.vue';
import CompanyWay from './../components/CompanyWay.vue';

const routes = [
  { path: '/', name: 'index', component: A01Binding },
  {
    path: '/A02Attr',
    name: 'attrs',
    // component: A02Attribute 
    components: {
      default: A02Attribute,
      footer: A07Push
    },
    alias: ['/A02', '/Attrs'],      // path로 '/A02Attr', '/A02', '/Attrs' 사용 가능
  },

  // path를 이용해서 해당 컴포넌트에 데이터를 전달
  // path/:변수명/:변수명.. 형태로 기술. 변수명도 패스다. 따라서 매칭되도록 Link를 작성
  // RouterLink to="/A03Params/1001/놀부/10" 라면
  /*
    const no = '1001';
    const name = '놀부';
    const id = 10;
  */
  { path: '/A03Params/:no/:name/:id', name: 'params', component: A03Params },

  // 위의 params를 보다 쉽게 처리 => 이 방식만 사용한다
  // 패스의 값을 props로 받아서 처리할 수 있다 => props: true
  { path: '/A04Props/:no/:name/:id', name: 'props', component: A04Props, props: true },

  // book 예제
  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child/:no', name: 'contactChild', component: A05ContactChild, props: true },

  // 주소줄에 ?key=value&key=value 형태의 값을 추출해서 사용
  { path: '/A06Query', name: 'query', component: A06Query },

  // RouterLink 이외의 이동 ex] button 클릭시 이동
  { path: '/A07Push', name: 'push', component: A07Push },

  // 하위 라우터 구성
  // 상위 컴포넌트 A08ChildRouter에 자식 컴포넌트가 표시될 위치를 <RouterView>로 정의
  // 브라우저에서 path가 부모의 패스 "/A08Child/"로 시작되면 A08ChildRouter의 RouterView에 로드
  {
    path: '/A08Child', name: 'child', component: A08ChildRouter,
    children: [
      { path: '', name: 'info', component: CompanyInfo },
      { path: 'way', name: 'way', component: CompanyWay },
      { path: '/A08Child/:no', name: 'view', component: A05ContactChild, props: true },
    ]
  },

  // 위의 지정한 패스와 매칭되지 않는 경우 표시할 컴포넌트 - 위치 상관없음
  // '/:path(.*)' => this.$route.params 이 문자열
  // '/:path(.*)*' => this.$route.params 이 구분된 배열로 저장된다
  { path: '/:path(.*)', name: 'not', component: A09NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
  /*
  routes: [
    { path: '/', name: 'index', component: A01Binding },
    { path: '/A02Attr', name: 'attrs', component: A02Attribute },
    { path: '/A03Params', name: 'params', component: A03Params },
  ]
  */
})
export default router;
