
import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import UserPage from '@/pages/UserPage'
import UserIdPage from '@/pages/UserIdPage'
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    },
    {
        path: '/users/:id',
        component: UserIdPage
    },
    {
        path: '/roles/:id',
        component: UserIdPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router