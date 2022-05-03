import {createRouter, createWebHistory} from "vue-router";

import AboutPage from "./pages/AboutPage.vue";
import Layout from "./pages/Layout.vue";
import Index from "./pages/Index.vue";
import Product from "./pages/Product.vue";


const routes = [
    // {
    //     path: '/index', component: Layout, children: [
    //         {
    //             path: 'a',
    //             name: "a",
    //             component: AboutPage
    //         },
    //         {
    //             path: 'b',
    //             name: "b",
    //             component: import("./pages/Layout.vue")
    //         }
    //     ],
    // },
    {
        path: '/', component: Index
    },
    {
        path: '/product', component: Product
    },
    {
        path: '/component', component: Index
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    console.log('to', to)
    next()
})


export default router
