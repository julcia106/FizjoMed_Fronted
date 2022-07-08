import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CennikView from '../views/CennikView.vue'
import KontaktView from '../views/KontaktView.vue'
import RejestracjaView from '../views/RejestracjaView.vue'
import RejestracjaView2 from '../views/RejestracjaView2.vue'
import OfertaView from '../views/OfertaView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cennik',
    name: 'cennik',
    component: CennikView
  },
  {
    path: '/oferta',
    name: 'oferta',
    component: OfertaView
  },
  {
    path: '/kontakt',
    name: 'konakt',
    component: KontaktView
  },
  {
    path: '/rejestracja',
    name: 'rejestracja',
    component: RejestracjaView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/rejestracja2',
    name: 'rejestracja2',
    component: RejestracjaView2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
