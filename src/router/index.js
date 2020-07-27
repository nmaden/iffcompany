import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from '../components/index.vue';
import main from '../components/main.vue';
import help from '../components/help.vue';
import news from '../components/news.vue';
import contacts from '../components/contacts.vue';
import login from '../components/login.vue';
import admin from '../components/admin.vue';
import user from '../components/user.vue';
import registerUser from '../components/register-user.vue';
import userInfo from '../components/user-info.vue';
const router = new VueRouter({
routes: [
        {
            path: '/',
            component: index,
            children: [
                { path: '/', component: main },
                { path: '/help', component: help },
                { path: '/news', component: news },
                { path: '/contacts', component: contacts },
                { path: '/login', component: login },
                { path: '/admin-only', component: admin },
                { path: '/user-only', component: user },
                { path: '/register-user', component: registerUser},
                { path: '/user-info-:id', component: userInfo},
                
            ]
        },
        // {
        //     path: '*',
        //     component: ErrorPage,
        // }
],
mode: 'history'
});
export default router;

