<script>
export default {
  name: "WishPositionView",
  data() {
    return {};
  },
  methods: {}
}
</script>

<template>
  <div>
    <h1>소원을 무엇에 담아주고 싶나요?</h1>
  </div>
  <div class="position">
    <router-link to="/leyng7/01/moon">
      <div>달</div>
    </router-link>
    <div>별동별</div>
    <div>폭죽</div>
    <div>유리병</div>
    <div>종이배</div>
    <div>촛불</div>
    <div>마법램프</div>
  </div>
</template>

<style scoped>
.position {
  display: flex;

  div {
    background-color: yellow;
    width: 100px;
    height: 100px;
    margin: 5px;
  }
}
</style>