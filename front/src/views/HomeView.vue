<script>
import {fetchPosts} from "@/api/posts";

export default {
  data() {
    return {
      items: [{
        name: 'moon',
        src: '/image/moon/moon04.png'
      }],
      currentDate: (new Date()).toLocaleDateString()
    }
  },
  methods: {
    async fetchData() {
      try {
        const {data: posts} = await fetchPosts();
        this.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
}
</script>

<template>
  <router-link to="/items/new">
    <img alt="달" class="square square1" :src="items[0].src"/>
  </router-link>
  <img class="square square2" src="@/assets/image/star.png"/>
  <img class="square square3" src="@/assets/image/star2.png"/>
  <img class="square square4" src="@/assets/image/fireworks.png"/>
  <img class="square default square5" src="@/assets/image/square.png"/>
  <img class="square default square6" src="@/assets/image/square.png"/>
  <img class="square default square7" src="@/assets/image/square.png"/>
</template>

<style scoped lang="scss">

.square {
  width: 20%;
  position: absolute;
  transform: translate(-50%, -50%);
  image-rendering: pixelated;
  opacity: 0.9;
  /*filter: opacity(1.0) drop-shadow(0 0 0 white);*/
}

.default {
  filter: opacity(1.0) drop-shadow(0 0 0 white);
}

.square1 {
  top: 10%;
  left: 15%;
}

.square2 {
  top: 10%;
  left: 50%;
}

.square3 {
  top: 10%;
  left: 85%;
}

.square4 {
  top: 50%;
  left: 35%;
}

.square5 {
  top: 50%;
  left: 65%;
}

.square6 {
  top: 90%;
  left: 50%;
}

.square7 {
  top: 90%;
  left: 75%;
}

</style>
