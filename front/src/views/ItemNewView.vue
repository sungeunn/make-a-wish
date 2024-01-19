<script>
export default {
  name: "ItemNewView",
  data() {
    return {
      items: ['/image/moon/moon01.png', '/image/moon/moon02.png', '/image/moon/moon03.png', '/image/moon/moon04.png', '/image/moon/moon05.png'],
    }
  }
}
</script>

<template>
  <v-row>
    <v-col
        v-for="n in 5"
        :key="n"
        class="d-flex child-flex"
        cols="4"
    >
      <v-img
          class="pixel"
          :src="items[n - 1]"
          aspect-ratio="1"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<style scoped>
  .pixel {
    image-rendering: pixelated;
  }
</style>