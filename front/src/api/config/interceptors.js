import store from "@/store";
import router from "@/router";

function setInterceptors(instance) {
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => Promise.reject(error.response),
  );
  instance.interceptors.response.use(
    config => config,
    async error => {

      if (error.response.status === 403) {
        await store.dispatch('LOGOUT');
        await router.push('/login');
      }

      return Promise.reject(error.response)
    },
  );
  return instance;
}

export { setInterceptors };