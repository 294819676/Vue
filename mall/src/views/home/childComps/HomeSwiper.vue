<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "",
  data() {
    return {
      isLoad: false
    };
  },
  created() {},
  mounted() {},
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style></style>
