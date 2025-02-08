import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import Character from '../views/Character.vue';

import { useUserStore } from '../store/user';

const routes = [
    { path: '/', component: LoginPage },
    {path: '/home', component: Home },
    {path: '/character', component: Character },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;