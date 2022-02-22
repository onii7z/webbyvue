import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'

import Tuto from '@/components/modules/tuto/Tuto'
import Module_Tuto from '@/components/modules/tuto/Module_Tuto'

import Tuto_Html from '@/components/modules/tuto/menu/Tuto_Html'
import Tuto_JavaScript from '@/components/modules/tuto/menu/Tuto_JavaScript'
import Tuto_Cms from '@/components/modules/tuto/menu/Tuto_Cms'
import Tuto_Css from '@/components/modules/tuto/menu/Tuto_Css'
import Tuto_Figma from '@/components/modules/tuto/menu/Tuto_Figma'
import Tuto_Php from '@/components/modules/tuto/menu/Tuto_Php'
import Tuto_Sql from '@/components/modules/tuto/menu/Tuto_Sql'

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
import Search from '@/components/pages/Search'

import Modal from '@/components/modules/modal/modal'
import Connect from '@/components/modules/modal/connect'
import Mobile from '@/components/modules/modal/mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Acceuil', component: Acceuil},
    {path: '/tuto', name: 'Tuto', component: Tuto},
    {path: '/module_tuto/:id', name: 'Module_Tuto', component: Module_Tuto},
    {path: '/tuto_html', name: 'Tuto_Html', component: Tuto_Html},
    {path: '/tuto_javascript', name: 'Tuto_JavaScript', component: Tuto_JavaScript},
    {path: '/tuto_cms', name: 'Tuto_Cms', component: Tuto_Cms},
    {path: '/tuto_css', name: 'Tuto_Css', component: Tuto_Css},
    {path: '/tuto_figma', name: 'Tuto_Figma', component: Tuto_Figma},
    {path: '/tuto_php', name: 'Tuto_Php', component: Tuto_Php},
    {path: '/tuto_sql', name: 'Tuto_Sql', component: Tuto_Sql},
    {path: '/mentions', name: 'Mentions', component: Mentions},
    {path: '/quisommes', name: 'QuiSommes', component: QuiSommes},
    {path: '/utilisation', name: 'Utilisation', component: Utilisation},
    {path: '/politique', name: 'Politique', component: Politique},
    {path: '/presentation_parcours', name: 'Presentation_parcours', component: Presentation_parcours},
    {path: '/liste_parcours', name: 'Liste_Parcours', component: Liste_parcours},
    {path: '/parcours', name: 'Parcours', component: Parcours},
    {path: '/lexique', name: 'Lexique', component: Lexique},
    {path: '/lexique_sommaire', name: 'Lexique_Sommaire', component: Lexique_Sommaire},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/search', name: 'Search', component: Search},
    {path: '/modal', name: 'Modal', component: Modal},
    {path : '/connect', name : 'Connect', component : Connect},
    {path : '/mobile', name : 'Mobile', component : Mobile},
    

  ]
})
