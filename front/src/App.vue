<template>
  <div class="container">
    <content/>
  </div>
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

</style>
