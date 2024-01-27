<script>
export default {
  name: "WishShapeView",
  props: ['shape'],
  data() {
    return {
      user: {
        fullName: "홍길동",
      },
      item: {
        moon: '달'
      }
    };
  },
}
</script>

<template>
  <div>
    <h1>어두운 밤, {{ user.fullName }}의 소원을 밝게 비춰줄 나만의 {{ item[shape] }}을 선택해주세요</h1>
  </div>
  <div class="container">
    <router-link to="/leyng7/01/moon/01">
      <div></div>
    </router-link>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;

    div {
      background-color: gray;
      width: 100px;
      height: 100px;
      margin: 5px;
      border-radius: 50%;
    }
  }
</style>