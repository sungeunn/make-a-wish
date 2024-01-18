<script>

export default {
  props: ['postId'],
  data() {
    return {
      tab: null,
      post: {
        id: 1,
        title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
        thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
      },
    }
  },
  methods: {}
}
</script>

<template>
  <v-card>
    <v-img
        src="https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        :alt="post.title"
        :cover="true"
        height="400px"
        class="thumbnail"
    ></v-img>
    <v-card-text class="details">
      <div class="brand">매일유업</div>
      <div class="product-name">아몬드 브리즈</div>
      <div class="viewers">377,879명 구경함</div>
      <div class="discount-info">
        <div class="discount-percentage">52%</div>
        <div class="current-price">14,900원</div>
      </div>
      <div class="original-price">
        <del>31,200원</del>
      </div>
      <div class="shipping-info">배송비 무료, 이 상품 배송은 평균 1~6일 걸려요</div>
      <div class="rating">
        <div class="star-icons">⭐⭐⭐⭐⭐</div>
        <div class="average-rating">4.8</div>
      </div>
    </v-card-text>
  </v-card>
  <v-tabs
      v-model="tab"
      align-tabs="center"
  >
    <v-tab :value="1">정보</v-tab>
    <v-tab :value="2">리뷰</v-tab>
  </v-tabs>
  <v-container v-if="tab === 1">
    <v-row>
      <v-col
          v-for="i in 6"
          :key="i"
          cols="12"
          md="4"
      >
        <v-img
            :src="`https://picsum.photos/500/300?image=${i * 1 * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${i * 1 * 5 + 10}`"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-if="tab === 2">
    <v-row>리뷰 100개</v-row>
    <v-row>
      <div>⭐⭐⭐⭐⭐</div>
      <div>4.4</div>
    </v-row>
    <v-row>
      <v-col v-for="i in 5" :key="i" cols="12" md="6" lg="4" xl="3">
        <div>⭐⭐⭐⭐⭐</div>
        <small class="text-grey-darken-1">23.9.7 장** / 나무팩토리 하트형 고주파 얼굴마사지기 / 1개</small>
        <div class="text-grey-lighten-1">오자마자 해봤는데 시원하고 좋더라구요~<br/>싸게 잘산듯.<br/>집에 디바이스 여러개 있는데 자주 손이 갈 것 같아요.</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.brand {
  font-size: 0.9rem;
  color: gray;
}

.product-name {

}

.viewers {
  margin-top: 3px;
  font-size: 0.7rem;
  color: gray;
}

.discount-info {
  margin-top: 10px;
  display: flex;
  align-content: center;
  font-size: 1.1rem;
  font-weight: bold;
}

.discount-percentage {
  color: red;
}

.price {
  margin-left: 5px;
}

.original-price {
  font-size: 0.9rem;
  color: rgb(128, 128, 128);
}

.shipping-info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: rgb(128, 128, 128);
}

.rating {
  align-items: baseline;
  display: flex;
}

.average-rating {
  margin-left: 5px;
}

.tabs {
  display: flex;

  .tab {
    flex-grow: 1;
    text-align: center;
    padding: 10px;
  }

  .active {
    border-bottom: black 1px solid;
  }
}
</style>