import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import ProductApplication from "./components/product/Application.vue";
import ProductCrawler from "./components/product/Crawler.vue";
import ProductWeb from "./components/product/Web.vue";
import Product from "@/pages/Product.vue"
const routes = [
    {
        path: '/', component: ()=>import("./pages/Index.vue")
    },
    {
        path: '/aa', component: ()=>import("./pages/Test.vue")
    },
    {
        path: '/product', component: Product, children: [
            {
                path: '',
                name: "default",
                component: () => import('@/components/product/Application.vue')
            },
            {
                path: 'application',
                name: "application",
                component: () => import('@/components/product/Application.vue')
            },
            {
                path: 'web',
                name: "web",
                component: () => import('@/components/product/Web.vue')
            },
            {
                path: 'crawler',
                name: "crawler",
                component: () => import('@/components/product/Crawler.vue')
            },
            {
                path: 'wechat',
                name: "wechat",
                component: () => import('@/components/product/Wechat.vue')
            },
            {
                path: '/chrome_extension',
                name: "chrome_extension",
                component: () => import('@/components/product/ChromeExtension.vue')
            },
        ]
    },
    {
        path: '/article',
        name: "article",
        component: () => import('./pages/Article.vue')
    },
    {
        path: '/courses/all',
        name: "all_courses",
        component: () => import('./pages/CourseList.vue')
    },
    // {
    //     path: '/course/:course_id',
    //     name: "course",
    //     component: () => import('./pages/Course.vue')
    // },
    {
        path: '/404',
        name: 'NotFound',
        meta: {
            title: 'Page not found',
            isLogin: false
        },
        component: () => import('./pages/404.vue')
    },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/404'
    // }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes,
});

// router.beforeEach((to, from, next) => {
//     // console.log('to', to)
//     next()
// })


export default router
