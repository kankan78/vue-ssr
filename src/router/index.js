import Vue from 'vue'
import Router from 'vue-router'
/*import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Articlelist from '@/components/Articlelist'
import Articleshow from '@/components/Articleshow'*/

const Hello = () => import('@/components/Hello')
const Test = () => import('@/components/Test')
const Articlelist = () => import('@/components/Articlelist')
const Articleshow = () => import('@/components/Articleshow')

Vue.use(Router)

const User = {
  template: '<div>{{ this.$route.query.msid }} User {{ $route.params.id }}</div>'
}

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/pwa/index.html',
        name: 'Hello',
        component: Hello
      },
      {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
        path: '*/articlelist*/:msid?',
        name: 'Articlelist',
        component: Articlelist,
        alias: ''
      },
      {
        path: '*/articleshow*/:msid',
        name: 'Articleshow',
        component: Articleshow
      },
      { path: '/user/:msid', component: User },    
      {
        path: '/',
        redirect: '/pwa/index.html'
      }

    ]
  })
}
