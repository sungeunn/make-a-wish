<template>
  <v-app>
    <v-main>
      <v-container class="pt-0 ">
        <div class="container">
          <content/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import {defineComponent} from "vue";
import AppHeader from "@/components/common/AppHeader.vue";

export default defineComponent({
  components: {AppHeader, Content, Header}
})

</script>

<style>
body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  sans-serif;
}

.container {
  margin: 0 auto;
  background-image: url("@/assets/image/container.png");
  max-width: 300px;
  height: 100vh;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  //overflow: hidden;
}
</style>
