import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

import UserReserveWorkout from '../components/UserReserveWorkout.vue'
import UserReserveMasage from '../components/UserReserveMasage.vue'
import UserMyPage from '../components/UserMyPage.vue'
import LogIn from '../views/Login.vue'
import Registration from '../views/Registration.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/user',
    name: 'UserReserveWorkout',
    component: UserReserveWorkout
  },
  {
    path: '/user/masage',
    name: 'UserReserveMasage',
    component: UserReserveMasage
  },
  {
    path: '/user/myPage',
    name: 'UserMyPage',
    component: UserMyPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
  // routes
})

export default router

