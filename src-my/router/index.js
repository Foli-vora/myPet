import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../components/home/home.vue'
import goods from '../components/goods/goods.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import myPet from '../components/myPet/myPet.vue'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: home,
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/myPet',
      component: myPet
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
