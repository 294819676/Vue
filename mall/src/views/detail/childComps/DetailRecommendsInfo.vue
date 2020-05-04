<template>
  <div>
    <div class="hot">热门推荐</div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommendsInfo",
  data() {
    return {};
  },
  props: {
    recommendsInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.hot {
  font-size: 17px;
  text-align: center;
  padding: 10px 0;
}
</style>