import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import New from '../views/new.vue'
import Onload from '../views/onload.vue'
import Shopping_car from '../views/shopping_car.vue'
import List from '../views/list.vue'
import Main from '../views/main.vue'

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
    component:Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
