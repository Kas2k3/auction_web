// import { createRouter, createWebHistory } from 'vue-router';
// import { useAuthStore } from '../stores/auth/authStore';

import PublicLayout from "../layouts/PublicLayout.vue";
// import Users from "../views/home/users/index.vue";
import Default from "../views/home/default/index.vue";
import Product from "../views/home/product/index.vue";
import Session from "../views/home/session/index.vue";
import History from "../views/home/history/index.vue";
import News from "../views/home/news/index.vue";
import Introduction from "../views/home/introduction/index.vue";
import Contact from "../views/home/contact/index.vue";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
// import Settings from "../views/home/settings/index.vue";
import Authenticate from "../views/auth/authenticate/index.vue";
import Login from "../views/auth/login/index.vue";
import Register from "../views/auth/register/index.vue";
import ForgotPassword from "../views/auth/forgotPassword/index.vue";
import ChangePassword from "../views/auth/changePassword/index.vue";
import Verify from "../views/auth/verify/index.vue";
import Verify2 from "../views/auth/verify2/index.vue";
// import ProductManagement from "../views/user/productManagement/index.vue";
import AllProduct from "../views/user/allProduct/index.vue";
import AddProduct from "../views/user/addProduct/index.vue";
import DeleteProduct from "../views/user/deleteProduct/index.vue";



const routes = [
    {
        path: '/',
        redirect: '/home/default'
    },
    {
        path: '/user',
        redirect: '/user/default'
    },
    {
        path: "/home",
        component: PublicLayout,
        children: [
            {
                path: "default",
                name: "home-default",
                component: Default
            },
            {
                path: "product",
                name: "home-product",
                component: Product
            },
            {
                path: "session",
                name: "home-session",
                component: Session
            },
            {
                path: "news",
                name: "home-news",
                component: News
            },
            {
                path: "history",
                name: "home-history",
                component: History
            },
            {
                path: "introduction",
                name: "home-introduction",
                component: Introduction
            },
            {
                path: "contact",
                name: "home-contact",
                component: Contact
            },
        ]
    },
    {
        path: "/login",
        component: Authenticate,
        children: [
            {
                path: "",
                name: "login",
                component: Login
            },
            {
                path: "forgotPassword",
                name: "login-forgotPassword",
                component: ForgotPassword,
                meta: { requiresVerification: true }
            },
            {
                path: "changePassword",
                name: "login-changePassword",
                component: ChangePassword,
                meta: { requiresVerification: true }
            },
            {
                path: "verify",
                name: "login-verify",
                component: Verify
            },
            {
                path: "verify2",
                name: "register-verify",
                component: Verify2
            },
            {
                path: "/register",
                name: "register",
                component: Register
            },
        ]
    },
    {
        path: "/user",
        component: AuthenticatedLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "default",
                name: "user-default",
                component: Default
            },
            {
                path: "allProduct",
                name: "all-product",
                component: AllProduct
            },
            {
                path: "addProduct",
                name: "add-product",
                component: AddProduct
            },
            {
                path: "deleteProduct",
                name: "delete-product",
                component: DeleteProduct
            },
            {
                path: "product",
                name: "user-product",
                component: Product
            },
            {
                path: "session",
                name: "user-session",
                component: Session
            },
            {
                path: "news",
                name: "user-news",
                component: News
            },
            {
                path: "history",
                name: "user-history",
                component: History
            },
            {
                path: "introduction",
                name: "user-introduction",
                component: Introduction
            },
            {
                path: "contact",
                name: "user-contact",
                component: Contact
            },
        ]
    }
];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// });

// router.beforeEach((to, from, next) => {
//     const authStore = useAuthStore();

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!authStore.isAuth) {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             });
//         } else {
//             next();
//         }
//     } else if (to.matched.some(record => record.meta.requiresVerification)) {
//         if (!authStore.email) {
//             next({
//                 path: '/login/verify',
//                 query: { redirect: to.fullPath }
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });
// {
//     path: "/productManagement",
//     component: ProductManagement,
//     children: [
//         {
//             path: "",
//             name: "add-product",
//             component: AddProduct
//         },
//     ]
// },


export default routes;
