import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from '../components/index.vue';
import main from '../components/main.vue';
import help from '../components/help.vue';
import news from '../components/news.vue';
import contacts from '../components/contacts.vue';
const router = new VueRouter({
routes: [
        {
            path: '/',
            component: index,
            children: [
                { path: '/', component: main },
                { path: '/help', component: help },
                { path: '/news', component: news },
                { path: '/contacts', component: contacts }
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

