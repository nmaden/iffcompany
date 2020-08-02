import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from '../components/index.vue';
import main from '../components/main.vue';
import help from '../components/help.vue';

import contacts from '../components/contacts.vue';
import login from '../components/login.vue';
import admin from '../components/admin.vue';
import user from '../components/user.vue';
import registerUser from '../components/register-user.vue';
import userInfo from '../components/user-info.vue';
import createFeedback from '../components/create-feedback.vue';
import listFeedback from '../components/list-feedback.vue';
import listFeedbacks from '../components/feedbacks.vue';
import createNews from '../components/create-news.vue';
import listNews from '../components/news.vue';
import editNews from '../components/list-news.vue';
const router = new VueRouter({
    
routes: [
        {
            path: '/',
            component: index,
            children: [
                { path: '/', component: main },
                { path: '/help', component: help },
                { path: '/news', component: listNews },
                { path: '/edit-news', component: editNews },
                { path: '/contacts', component: contacts },
                { path: '/login', component: login },
                { path: '/admin-only', component: admin },
                { path: '/user-only', component: user },
                { path: '/register-user', component: registerUser},
                { path: '/user-info-:id', component: userInfo},
                { path: '/create-feedback', component: createFeedback},
                { path: '/create-news', component: createNews},
                { path: '/list-feedback', component: listFeedback},
                { path: '/feedbacks', component: listFeedbacks},      
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

