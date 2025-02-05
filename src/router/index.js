import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import { useUserStore } from '../store/user';

const routes = [
    { path: '/', component: LoginPage },
    {path: '/home', component: Home, },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;