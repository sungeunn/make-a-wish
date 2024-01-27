import {createRouter, createWebHistory} from 'vue-router'
import ReadView from "@/views/ReadView.vue"
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import ItemNewView from "@/views/ItemNewView.vue";
import store from "@/store";
import WishView from "@/views/WishView.vue";
import WishPositionView from "@/views/WishPositionView.vue";
import WishShapeView from "@/views/WishShapeView.vue";
import WishNewView from "@/views/WishNewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WishView
    },
    {
      path: '/:username',
      name: 'user-wish',
      component: WishView,
    },
    {
      path: '/:username/:position',
      name: 'user-wish-position',
      component: WishPositionView
    },
    {
      path: '/:username/:position/:shape',
      name: 'user-wish-shape',
      component: WishShapeView,
      props: true
    },
    {
      path: '/:username/:position/:shape/:number',
      component: WishNewView,
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
      // beforeEnter
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
