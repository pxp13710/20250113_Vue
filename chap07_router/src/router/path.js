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

export const routes = [
  { path: '/', name: 'index', component: A01Binding },
  { path: '/A02Attr', name: 'attrs', component: A02Attribute },
  { path: '/A03Params', name: 'params', component: A03Params },
  { path: '/A04Props', name: 'props', component: A04Props },
  { path: '/A05Contact', name: 'contact', component: A05Contact },
  { path: '/A05Child', name: 'contactChild', component: A05ContactChild },
  { path: '/A06Query', name: 'query', component: A06Query },
  { path: '/A07Push', name: 'push', component: A07Push },
  { path: '/A08Child', name: 'child', component: A08ChildRouter },
  { path: '/A09NotFound', name: 'not', component: A09NotFound },
]
