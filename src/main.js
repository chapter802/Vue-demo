import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import home from './components/home.vue'
import books from './components/books.vue'
import user from './components/user.vue'



Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/books', component: books },
    { path: '/user', component: user },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
