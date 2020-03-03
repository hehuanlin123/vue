import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart.vue'
import Address from '../views/address.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cart' + '?rand=' + Math.random()
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart,
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
  },

]

const router = new VueRouter({
  routes
})

export default router
