import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';

// Define routes
const routes = [
  { path: '/', component: Login, name: 'Login' },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
