<script>
import {mapGetters} from 'vuex';
import SearchDialog from "@/components/SearchDialog.vue";

export default {
  components: {SearchDialog},
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  data() {
    return {
      navHeight: 0,
      dialog: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
      this.$router.push('/');
    },
    performSearch() {

    },
    handleShowDialog() {
      this.dialog = true;
    },
    handleCloseDialog() {
      this.dialog = false;
    }
  },
};
</script>

<template>
  <v-app-bar>

    <template v-slot:prepend>
      <v-icon>mdi-shopping-outline</v-icon>
    </template>

    <v-toolbar-title class="ml-2">토스오더</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn :icon="true" @click="dialog = true">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <search-dialog :dialog="dialog" @close-dialog="handleCloseDialog"/>


  <!--  <header ref="appHeader">
      <div>
        <router-link to="/" class="logo">
          Toss Order
        </router-link>
      </div>
      <div class="navigations">
        <template v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Sign Up</router-link>
        </template>
        <template v-else>
          <a href="javascript:void(0);" @click="logout" class="logout-button">Logout</a>
        </template>
      </div>
    </header>-->
</template>

<style scoped>

</style>