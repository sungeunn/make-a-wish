<script>
export default {
  name: "WishView",
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <h1>소원을 어디에 담아주고 싶나요?</h1>
  </div>
  <div class="wish">
    <router-link to="/leyng7/01">
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
.wish {
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