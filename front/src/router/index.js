import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ReadView from "@/views/ReadView.vue"
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import ItemNewView from "@/views/ItemNewView.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/:postId',
      name: 'read',
      component: ReadView,
      props: true
    },
    {
      path: '/items/new',
      name: 'item-new',
      component: ItemNewView,
      beforeEnter
    },
    {
      path: "/login",
      component: LoginView,
      beforeEnter(to, from, next) {
        store.getters['isLoggedIn'] ? next('/') : next();
      },
    },
    {
      path: "/signup",
      component: SignupView,
      beforeEnter(to, from, next) {
        store.getters['isLoggedIn'] ? next('/') : next();
      },
    }
  ]
})

function beforeEnter(to, from, next) {
  if (store.getters['isLoggedIn']) {
    next();
  } else {
    next('/login');
  }
}

export default router
