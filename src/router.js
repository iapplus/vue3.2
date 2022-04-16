import {createRouter, createWebHistory} from "vue-router";


import IndexPage from "./pages/IndexPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import Layout from "./pages/Layout.vue";


const routes = [
        {
        path: '/index', component: Layout, children: [
            {
                path: 'a',
                name: "a",
                component:AboutPage
            },
            {
                path: 'b',
                name: "b",
                component: IndexPage
            }
        ],
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router
