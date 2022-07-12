import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import New from '../views/new.vue'
import Onload from '../views/onload.vue'
import Shopping_car from '../views/shopping_car.vue'
import List from '../views/list.vue'
import Main from '../views/main.vue'
import Shop from '../router/shop.vue'
import Say from '../router/say.vue'
import SupplierList from '../views/supplier_list.vue'
import Search from '../views/search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path:'/new_list',
    component: New
  },{
    path:'/shopping_car',
    component: Shopping_car
  },{
    path:'/onload',
    component:Onload
  },{
    path:'/category',
    component:List
  },{
    path:'/main',
    name:'main',
    component:Main,
    children:[{
      path:'',
      component:Shop
    },{
      path:'say',
      component:Say
    }]
  },{
    path:'/supplierList',
    component:SupplierList
  },{
    path:'/search',
    component:Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
