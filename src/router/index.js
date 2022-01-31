import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'
import Tuto from '@/components/pages/Tuto'
import Mentions from '@/components/pages/Mentions'
import QuiSommes from '@/components/pages/QuiSommes'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
    {path: '/mentions', name: 'Mentions', component: Mentions},
    {path: '/quisommes', name: 'QuiSommes', component: QuiSommes},
  ]
})
