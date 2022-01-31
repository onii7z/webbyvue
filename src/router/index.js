import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'
import Tuto from '@/components/modules/tuto/Tuto'
import Mentions from '@/components/pages/Mentions'
import QuiSommes from '@/components/pages/QuiSommes'
import Utilisation from '@/components/pages/Utilisation'
import Politique from '@/components/pages/Politique'
import Presentation_parcours from '@/components/pages/Presentation_parcours'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
    {path: '/mentions', name: 'Mentions', component: Mentions},
    {path: '/quisommes', name: 'QuiSommes', component: QuiSommes},
    {path: '/utilisation', name: 'Utilisation', component: Utilisation},
    {path: '/politique', name: 'Politique', component: Politique},
    {path: '/presentation_parcours', name: 'Presentation_parcours', component: Presentation_parcours},
  ]
})
