import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '../components/login/login.vue'
import registPage from '../components/regist/regist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: loginPage
    },
    {
      path: '/login',
      component: loginPage
    },
    {
      path: '/regist',
      component: registPage
    },
  ]
})
