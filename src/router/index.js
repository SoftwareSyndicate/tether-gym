import Vue from 'vue'
import Router from 'vue-router'

import * as Pages from '../pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gym'
    },
    {
      path: '/gym',
      name: 'gym',
      component: Pages.GymPage,
    },
    {
      path: '/walls',
      name: 'walls',
      component: Pages.WallsPage
    },
    {
      path: '/users',
      name: 'users',
      component: Pages.UsersPage
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: Pages.AnnouncementsPage
    },
    {
      path: '/distribution',
      name: 'distribution',
      component: Pages.DistributionPage
    },
    {
      path: '/setters',
      name: 'setters',
      component: Pages.SettersPage
    },
  ]
})
