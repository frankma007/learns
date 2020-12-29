import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'
import Learns from '@/components/Learns'
import AutoAddSubtract from "@/components/AutoAddSubtract";
import Login from "@/components/Login";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/learns',
      name: 'Learns',
      component: Learns
    },
    {
      path: '/autoadd',
      name: 'LeaAutoAddSubtractrns',
      component: AutoAddSubtract
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
      
    }
  ]
})
