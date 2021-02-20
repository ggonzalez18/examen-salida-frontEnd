import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            login: true
        }
    },
    {
        path: '/seller',
        name: 'Seller',
        component: () =>
            import ( /* webpackChunkName: "Seller" */ '../views/Seller.vue'),
        meta: {
            login: true
        }
    },
    {
        path: '/dateseller',
        name: 'DateSeller',
        component: () =>
            import ( /* webpackChunkName: "DateSeller" */ '../views/DateSeller.vue'),
        // meta: {
        //     login: true
        // }
    },
    {
        path: '/*',
        name: 'NotFound',
        component: () =>
            import ( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login) && !store.getters['isAuthenticated']) {
        next('/')
    } else {
        next()
    }
})
export default router