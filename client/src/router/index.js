import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginToken from '../views/LoginToken.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login/token/:token',
        name: 'login-toke',
        component: LoginToken,
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;