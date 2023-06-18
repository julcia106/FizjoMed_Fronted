import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutWorkersView from '../views/AboutWorkersView.vue'
import PriceListView from '../views/PriceListView.vue'
import ContactView from '../views/ContactView.vue'
import TreatmentManagementView from '../views/TreatmentManagementView.vue'
import TreatmentBookingView from '../views/TreatmentBookingView.vue'
import AdminLogin from '../views/AdminLoginView.vue'
import OfferView from '../views/OfferView.vue'
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
    component: AboutWorkersView
  },
  {
    path: '/cennik',
    name: 'cennik',
    component: PriceListView
  },
  {
    path: '/oferta',
    name: 'oferta',
    component: OfferView
  },
  {
    path: '/kontakt',
    name: 'konakt',
    component: ContactView
  },
  {
    path: '/zabiegi',
    name: 'zabiegi',
    component: TreatmentManagementView
  },
  {
    path: '/rezerwacjazabiegu',
    name: 'rezerwacjazabiegu',
    component: TreatmentBookingView
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
