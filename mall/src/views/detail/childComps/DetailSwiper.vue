<template>
  <div>
    <Swiper class="setSwiper">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {},
  props: {
    topImages: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped>
.setSwiper {
  height: 300px;
  overflow: hidden;
}
</style>