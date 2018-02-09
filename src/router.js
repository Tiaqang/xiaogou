import Vue from "vue"
import Router from "vue-router"

import index from "./index"
import login from "./components/login/login"
import register from "./components/login/register"
import first from "./components/firstpage/firstpage"
Vue.use(Router);

export default new Router({

    routes:[
        {
            path: '/',
            component: index
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/first',
            component: first
        }
    ]
});
