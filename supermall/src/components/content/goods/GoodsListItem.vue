<template>
  <div class="good-list-item">
    <img :src="goodsItem.show.img" alt />
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.good-list-item {
  width: 48%;
  /* width: 200px; */
}
.good-list img {
  width: 100%;
  border-radius: 5%;
}
.goods-info {
  font-size: 12px;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
}
.goods-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>