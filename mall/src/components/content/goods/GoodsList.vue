<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  data() {
    return {};
  },
  created() {},
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {},
  components: {
    GoodsListItem
  }
};
</script>
<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>