import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue';
import CourseList from '../components/CourseList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/courses', component: CourseList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;