import {createStore} from 'vuex';
import {loginUser, logoutUser} from '@/api/auth';
import {deleteCookie, getUserFromCookie, saveUserToCookie,} from '@/utils/cookies.js';

export default createStore({
  state: {
    user: getUserFromCookie() || '',
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async LOGIN({commit}, data) {
      await loginUser(data);
      const user = {
        email: data.email
      }
      commit('SET_USER', user);
      saveUserToCookie(user);
    },
    async LOGOUT({commit}, data) {
      await logoutUser();
      commit('SET_USER', );
      deleteCookie('MEMBER');
    },
  },
});