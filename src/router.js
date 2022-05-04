import {createRouter, createWebHistory} from "vue-router";

import Index from "./pages/Index.vue";
import Product from "./pages/Product.vue";
import ProductApplication from "./pages/ProductApplication.vue";
import ProductCrawler from "./pages/ProductCrawler.vue";
import ProductWeb from "./pages/ProductWeb.vue";
import ProductWechat from "./pages/ProductWechat.vue";
import Article from "./pages/Article.vue";
import Course from "./pages/Course.vue";


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
        path: '/product', component: Product, children: [
            {
                path: '',
                name: "default",
                component: ProductApplication
            },
            {
                path: 'application',
                name: "application",
                component: ProductApplication
            },
            {
                path: 'web',
                name: "web",
                component: ProductWeb
            },
            {
                path: 'crawler',
                name: "crawler",
                component: ProductCrawler
            },
            {
                path: 'wechat',
                name: "wechat",
                component: ProductWechat
            },
        ]
    },
    {
        path: '/article',
        name: "article",
        component: Article
    },
    {
        path: '/course',
        name: "course",
        component: Course
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes,
});

router.beforeEach((to, from, next) => {
    console.log('to', to)
    setTimeout(function (){
        next()
    },50)
})


export default router
