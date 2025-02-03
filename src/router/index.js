import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import { useUserStore } from '../stores/user';

const routes = [
    { path: '/', component: LoginPage },
    {path: '/home', component: Home, },
    { path: '/about', component: About },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;