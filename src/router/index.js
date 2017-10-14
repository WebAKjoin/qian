import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import me from '@/components/me'
import life from '@/components/life'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/home',
      children:[
        {
          path:'home',
          name:'home',
          component:home
        },
        {
          path:'me',
          name:'me',
          component:me
        },
        {
          path:'life',
          name:'life',
          component:life
        }
      ]
    }
  ]
})