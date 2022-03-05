import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'

import Tuto from '@/components/modules/tuto/Tuto'
import Module_Tuto from '@/components/modules/tuto/Module_Tuto'



import Liste_parcours from '@/components/modules/parcours/Liste_parcours'
import Parcours from '@/components/modules/parcours/Parcours'
import Presentation_parcours from '@/components/modules/parcours/Presentation_parcours'

import Lexique from '@/components/modules/lexique/Lexique'
import Lexique_Sommaire from '@/components/modules/lexique/Lexique_Sommaire'

import Mentions from '@/components/pages/Mentions'
import QuiSommes from '@/components/pages/QuiSommes'
import Utilisation from '@/components/pages/Utilisation'
import Politique from '@/components/pages/Politique'
import Contact from '@/components/pages/Contact'

import Modal from '@/components/modules/modal/modal'
import Mobile from '@/components/modules/modal/mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
    {path: '/module_tuto/:id', name: 'Module_Tuto', component: Module_Tuto},
    {path: '/mentions', name: 'Mentions', component: Mentions},
    {path: '/quisommes', name: 'QuiSommes', component: QuiSommes},
    {path: '/utilisation', name: 'Utilisation', component: Utilisation},
    {path: '/politique', name: 'Politique', component: Politique},
    {path: '/presentation_parcours', name: 'Presentation_parcours', component: Presentation_parcours},
    {path: '/liste_parcours', name: 'Liste_Parcours', component: Liste_parcours},
    {path: '/parcours/:id', name: 'Parcours', component: Parcours},
    {path: '/lexique/:id', name: 'Lexique', component: Lexique},
    {path: '/lexique_sommaire', name: 'Lexique_Sommaire', component: Lexique_Sommaire},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/modal', name: 'Modal', component: Modal},
    {path : '/mobile', name : 'Mobile', component : Mobile},
    

  ]
})
