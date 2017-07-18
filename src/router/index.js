import Vue from 'vue'
import Router from 'vue-router'
import Simulate from '@/components/Simulate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Simulate',
      component: Simulate
    }
  ]
})
