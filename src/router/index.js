import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import magentoCategory from '@/components/magentoCategory'
// import googleCategory from '@/components/googleCategory'
// import techCategory from '@/components/techCategory'
// import webpageTest from '@/components/webpageTest'
// import socialMedia from '@/components/socialMedia'
// import vueCategory from '@/components/vueCategory'


Vue.use(Router);

export default new Router({
routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
]
})
