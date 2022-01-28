import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'
import Tuto from '@/components/Tuto'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
  ]
})
