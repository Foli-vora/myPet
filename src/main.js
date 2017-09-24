/**
 * Created by Folivora on 2017/9/21.
 */
import Vue from 'vue'

import app from './app.vue'
import router from './router'

import {Swipe,SwipeItem} from 'mint-ui'
Vue.component('mt-swipe',Swipe)
Vue.component('mt-swipe-item',SwipeItem)

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
