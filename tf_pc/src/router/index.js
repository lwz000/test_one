import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Used_car from "../views/used_car.vue";
import New_car from "../views/new_car.vue";
import Sell_car from "../views/sell_car.vue";
import Finance from "../views/finance.vue";
import Helper from "../views/helper.vue"
import News from '../views/news.vue'
import Main from '../views/main.vue'

import Know from './know.vue'
import After_sell from './after_sell.vue'
import Change_car from './change_car.vue'
import Insure from './insure.vue'

const routes = [
  {
    path: '/',
    component:Home
  },{
    path:'/used_car',
    component:Used_car
  },{
    path:'/new_car',
    component:New_car
  },{
    path:'/sell_car',
    component:Sell_car
  },{
    path:'/finance',
    component:Finance
  },{
    path:'/helper',
    component:Helper,
    children:[
      {
        path:'',
        component:Know
      },{
        path:'after_sell',
        component:After_sell
      },{
        path:'change_car',
        component:Change_car
      },{
        path:'insure',
        component:Insure
      }
    ]
  },{
    path:'/news',
    component:News
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
