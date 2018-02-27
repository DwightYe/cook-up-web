import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recipes from '@/components/Recipes'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    title: 'CookUp 主页'
  }, {
    path: '/recipes/:foundBy/:key',
    name: 'Recipes',
    component: Recipes,
    title: '菜谱列表'
  }]
})
