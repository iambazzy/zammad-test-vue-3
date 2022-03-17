import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import Home from '../views/Home.vue'

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/task',
    name: 'Task',
    props: true,
    component: () => import('../views/Task/Task.vue')
  },
  {
    path: '/task-details/:episode_id',
    name: 'Task Details',
    props: true,
    component: () => import('../views/Task/TaskDetails.vue')
  }
]

const routes = [
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
