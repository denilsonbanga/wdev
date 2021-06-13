import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '@/page/Home';
import Videos from '@/page/Videos'
import Sobre from '@/page/Sobre'
import Contacto from '@/page/Contacto'
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/contacto',//
        component: Contacto
    }, 
    {
        path: '/sobre',
        component: Sobre
    }, 
    {
        path: '/videos',
        component: Videos
    }, 
   
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;



