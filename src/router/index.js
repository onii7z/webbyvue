import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'

import Tuto from '@/components/modules/tuto/Tuto'
import Module_Tuto from '@/components/modules/tuto/Module_Tuto'
import Module_Cat_Tuto from '@/components/modules/tuto/Module_Cat_Tuto'

import Liste_parcours from '@/components/modules/parcours/Liste_parcours'
import Parcours from '@/components/modules/parcours/Parcours'
import Presentation_parcours from '@/components/modules/parcours/Presentation_parcours'

import Mentions from '@/components/pages/Mentions'
import QuiSommes from '@/components/pages/QuiSommes'
import Utilisation from '@/components/pages/Utilisation'
import Politique from '@/components/pages/Politique'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
    {path: '/module_tuto', name: 'Module_Tuto', component: Module_Tuto},
    {path: '/module_cat_tuto', name: 'Module_Cat_Tuto', component: Module_Cat_Tuto},
    {path: '/mentions', name: 'Mentions', component: Mentions},
    {path: '/quisommes', name: 'QuiSommes', component: QuiSommes},
    {path: '/utilisation', name: 'Utilisation', component: Utilisation},
    {path: '/politique', name: 'Politique', component: Politique},
    {path: '/presentation_parcours', name: 'Presentation_parcours', component: Presentation_parcours},
    {path: '/liste_parcours', name: 'Liste_Parcours', component: Liste_parcours},
    {path: '/parcours', name: 'Parcours', component: Parcours},
  ]
})
