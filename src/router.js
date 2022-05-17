import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./view/newHome.vue')
        },
        {
            path: '/max',
            name: 'max',
            component: () => import('./view/maxNft.vue')
        }
    ]
})

export default router
