<template>
  <div class="good-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>