import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LusiadaLab from '../views/LusiadaLab.vue'
import Overview from '../views/Overview.vue'
import Lectures from '../views/Lectures.vue'
import Assignments from '../views/Assignments.vue'
import Projects from '../views/Projects.vue'

// import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/LusiadaLab',
    name: 'LusiadaLab',
    component: LusiadaLab
  },
  {
    path: '/Overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/Lectures',
    name: 'Lectures',
    component: Lectures
  },
  {
    path: '/Assignments',
    name: 'Assignments',
    component: Assignments
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
