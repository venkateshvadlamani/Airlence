import Vue from 'vue'
import Router from 'vue-router'
import About from '../src/components/About'
import Landing from '../src/components/Landing'
import Experiments from '../src/components/Experiments'
import Pricing from '../src/components/Pricing'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/about',
      component: About,
      name: 'About'
    },
    {
      path: '/',
      component: Landing,
      name: 'Landing'
    },
    {
      path: '/experiments',
      component: Experiments,
      name: 'Experiments'
    },
    {
      path: '/pricing',
      component: Pricing,
      name: 'Pricing'
    },
  ]
})
