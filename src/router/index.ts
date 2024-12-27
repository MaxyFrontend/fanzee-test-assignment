import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { loadLayoutMiddleware } from './middleware/loadLayoutMiddleware'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                layout: 'DefaultLayout'
            }
        },
        {
            path: '/movie/:id',
            name: 'movie',
            component: () => import('../views/MovieDetailView.vue'),
            meta: {
                layout: 'DefaultLayout'
            }
        }
    ]
})

router.beforeEach(loadLayoutMiddleware)

export default router
