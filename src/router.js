import {createRouter, createWebHistory} from "vue-router";
import ProductApplication from "./pages/ProductApplication.vue";
import ProductCrawler from "./pages/ProductCrawler.vue";
import ProductWeb from "./pages/ProductWeb.vue";


const routes = [
    {
        path: '/', component: ()=>import("./pages/Index.vue")
    },
    {
        path: '/product', component: ()=>import("./pages/Product.vue"), children: [
            // {
            //     path: '',
            //     name: "default",
            //     component: ProductApplication
            // },
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
                component: () => import('./pages/ProductWechat.vue')
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
    {
        path: '/course/:course_id',
        name: "course",
        component: () => import('./pages/Course.vue')
    },
    {
        path: '/404',
        name: 'NotFound',
        meta: {
            title: 'Page not found',
            isLogin: false
        },
        component: () => import('./pages/404.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes,
});

router.beforeEach((to, from, next) => {
    // console.log('to', to)
    next()
})


export default router
