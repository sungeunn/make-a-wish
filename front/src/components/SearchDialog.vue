<script>
export default {
  name: "SearchDialog",
  props: {
    dialog: Boolean,
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    handleClose() {
      this.searchText = '';
    },
    closeDialog() {
      this.$emit("close-dialog");
    },
    handleRecentSearch(event) {
      this.searchText = event.target.innerText;
    }
  },
}
</script>

<template>
  <v-dialog
      :model-value="dialog"
      transition="dialog-bottom-transition"
      :fullscreen="true"
      @click:outside="closeDialog"
      @keydown.esc="closeDialog"
  >
    <v-card>
      <v-toolbar>
        <v-btn :icon="true" @click="closeDialog">
          <v-icon>mdi-keyboard-backspace</v-icon>
        </v-btn>
        <v-text-field
            :autofocus="true"
            v-model="searchText"
            prepend-inner-icon="mdi-magnify"
            label="상품을 검색해보세요"
            hide-details
            append-inner-icon="mdi-close-circle-outline"
            @click:append-inner="handleClose"
        ></v-text-field>
      </v-toolbar>
      <v-container>
        <div class="d-flex justify-space-between pa-1">
          <div>최근 검색어</div>
          <div class="text-grey-darken-1">삭제하기</div>
        </div>
        <v-row class="ga-2 mt-2">
          <v-chip :link="true" @click="handleRecentSearch">라면</v-chip>
          <v-chip :link="true" @click="handleRecentSearch">슬리퍼</v-chip>
          <v-chip :link="true" @click="handleRecentSearch">콜라</v-chip>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>