import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './components/SignIn'
import Search from './components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})
