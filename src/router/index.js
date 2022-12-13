import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Error404 from '../views/Error404.vue';

export const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
        {
          path: '/', 
          name: 'home', 
          component: HomeView
        },
        {
          path: '/login', 
          name: 'login', 
          component: Login
        },
        {
          path: '/register', 
          name: 'register', 
          component: Register
        },
        {
          path: "/:pathMatch(.*)*", 
          name: "Error404", 
          component: Error404
        }
    ]
  }
)