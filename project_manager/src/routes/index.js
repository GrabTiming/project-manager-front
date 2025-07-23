import MainView from "@/components/MainView.vue";
import ProjectView from "@/components/ProjectView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: MainView
    },
    {
        path: '/project',
        name: 'ProjectView',
        component: ProjectView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router