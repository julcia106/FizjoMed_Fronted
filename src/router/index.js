import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CennikView from '../views/CennikView.vue'
import KontaktView from '../views/KontaktView.vue'
import TreatmentManagementView from '../views/TreatmentManagementView.vue'
import RezerwacjaZabieguView from '../views/RezerwacjaZabieguView.vue'
import AdminLogin from '../views/AdminLoginView.vue'
import OfertaView from '../views/OfertaView.vue'
import UserView from '../views/UserView.vue'
import AdminView from '../views/AdminView.vue'

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
    path: '/zabiegi',
    name: 'zabiegi',
    component: TreatmentManagementView
  },
  {
    path: '/rezerwacjazabiegu',
    name: 'rezerwacjazabiegu',
    component: RezerwacjaZabieguView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: AdminLogin
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
