import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/HomeComp.vue'
import About from '@views/AboutComp.vue'
import GetContactList from '@views/GetContactList.vue'
import GetContact from '@views/GetContact.vue'
import AddContact from '@views/AddContact.vue'
import UpdateContact from '@views/UpdateContact.vue'
import UpdatePhoto from '@views/UpdatePhoto.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/list', name: 'list', component: GetContactList },
  { path: '/contact/:no', name: 'contact', component: GetContact, props: true },
  { path: '/add', name: 'add', component: AddContact },
  { path: '/update', name: 'update', component: UpdateContact },
  { path: '/photo/:no', name: 'photo', component: UpdatePhoto, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
