import Vue from 'vue'
import Router from 'vue-router'
import MakeCv from '@/components/MakeCv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MakeCv',
      component: MakeCv
    }
  ]
})
