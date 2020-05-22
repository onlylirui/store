import routes from "@/routes";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

let router=new VueRouter({
    mode:'history',
    routes,
    linkActiveClass:"active"
})
export default router
