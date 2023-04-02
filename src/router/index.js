import { createRouter, createWebHistory } from "vue-router";
import index from "../components/index.vue"
import practicle from "../components/practicle.vue"
import errPage from "../components/404.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "",
            name: "index",
            component: index,
            meta: {
                keepAlive: true 
              }
        },
        {
            path: "/",
            name: "vite-testing",
            component: index,
            meta: {
                keepAlive: true 
              }
        },
        {
            path: "/practicle",
            name:"practicle",
            component: practicle,
            meta: {
                keepAlive: false
              }
        },
        {
            path: '/404',
            name: '404',
            component: errPage,
            hidden: true
          },
        {
            path: '/:domain(.*)*',
            redirect: '/404',
            hidden: true
        }
    ]
})
export default router