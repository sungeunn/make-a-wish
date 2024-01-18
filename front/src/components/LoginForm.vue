<script>
import PageHeader from './common/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      email: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      if (!this.email || !this.password) {
        alert('Fill in the account information');
        return;
      }
      try {
        await this.$store.dispatch('LOGIN', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/');
        this.initForm();
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data.message;
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <page-header>Login</page-header>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">ID</label>
          <input type="text" id="email" v-model="email" />
        </div>
        <div>
          <label for="password">PW</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button class="btn">login</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.btn {
  color: white;
}
</style>