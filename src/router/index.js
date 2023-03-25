import { createRouter, createWebHistory } from "vue-router";
import index from "../components/index.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "vite-testing",
            component: index
        }
    ]
})
export default router