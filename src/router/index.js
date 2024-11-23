import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/dashboard.vue';
import LoginView from '../views/LoginView.vue'; // Import LoginView

const routes = [
  // Login route
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  
  // Dashboard route
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  
  // Courses routes
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/courses/index.vue'),
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: () => import('@/views/courses/[id].vue'),
  },
  
  // Other routes
  {
    path: '/assignments',
    name: 'Assignments',
    component: () => import('@/views/Assignments.vue'),
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@/views/Calendar.vue'),
  },
  {
    path: '/discussions',
    name: 'Discussions',
    component: () => import('@/views/Discussions.vue'),
  },
  {
    path: '/performance-overview',
    name: 'Performance',
    component: () => import('@/views/PerformanceOverview.vue'),
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('@/views/Resources.vue'),
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import('@/views/Achievements.vue'),
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('@/views/Support.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('@/views/Notification.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
