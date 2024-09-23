import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'loginAuth',
    component: () => import('../pages/auth/loginAuth.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savePostion) {
        if (savePostion) {
            return savePostion;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

// 路由收尾
/*
router.beforeEach((to, from, next)=>{

})
*/

/*
router.afterEach((to, from)=>{
})
*/
export default router;
