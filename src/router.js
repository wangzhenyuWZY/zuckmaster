import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./view/home.vue')
        },
        {
            path: '/MysteryBoxes',
            name: 'MysteryBoxes',
            component: () => import('./view/mystery-boxes.vue')
        },
        {
            path: '/Coming',
            name: 'Coming',
            component: () => import('./view/Coming-Soon.vue')
        },
        {
            path: '/placeShowall',
            name: 'placeShowall',
            component: () => import('./view/place-showall.vue')
        },
        {
            path: '/saleDetail',
            name: 'saleDetail',
            component: () => import('./view/sale-detail.vue')
        },
        {
            path: '/myCollection',
            name: 'myCollection',
            component: () => import('./view/myCollection.vue')
        }
    ]
})

export default router
