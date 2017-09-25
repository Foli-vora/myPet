import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home/home.vue'
import goods from '../components/goods/goods.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import myPet from '../components/myPet/myPet.vue'

import shouye from '../components/shouye/shouye.vue'
import zhuliang from '../components/zhuliang/zhuliang.vue'
import yiliao from '../components/yiliao/yiliao.vue'
import wanju from '../components/wanju/wanju.vue'
import riyong from '../components/riyong/riyong.vue'
import meirong from '../components/meirong/meirong.vue'

import classify from '../components/classify/classify.vue'
import brand from '../components/brand/brand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/home/shouye',
        },
        {
          path: 'shouye',
          component: shouye,
        },
        {
          path: 'zhuliang',
          component: zhuliang,
        },
        {
          path: 'yiliao',
          component: yiliao,
        },
        {
          path: 'wanju',
          component: wanju,
        },
        {
          path: 'riyong',
          component: riyong,
        },
        {
          path: 'meirong',
          component: meirong,
        }
      ]
    },
    {
      path: '/goods',
      component: goods,
      children:[
        {
          path: '/',
          redirect: '/goods/classify'
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/myPet',
      component: myPet
    },

  ]
})
