import { createRouter, createWebHistory } from 'vue-router'
import DsLogin from '../pages/Login/DsLogin.vue'
import DsDashboard from '../pages/Dashboard/DsDashboard.vue'

const ifAuthenticated = (to, from, next) => {
 if (localStorage.getItem('ds-token')) {
  next();
 }
 else {
  next({ name: 'ds-login' });
 }
};

const ifNotAuthenticated = (to, from, next) => {
 if (!localStorage.getItem('ds-token')) {
  next();
 }
 else {
  next({ name: 'ds-dashboard' });
 }
};

const privateRoutes = [
 {
  path: '/dashboard',
  name: 'ds-dashboard',
  component: DsDashboard,
  beforeEnter: ifAuthenticated,
 },
];
const publicRoutes = [
 {
  path: '/',
  name: 'ds-login',
  component: DsLogin,
  beforeEnter: ifNotAuthenticated,
 },
];


const routes = [
 ...publicRoutes,
 ...privateRoutes
]

const router = createRouter({
 history: createWebHistory(),
 routes
})

export default router