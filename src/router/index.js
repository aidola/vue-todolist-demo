import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Container from '@/todo/container.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: Container
    }
  ]
})
