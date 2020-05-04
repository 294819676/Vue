<template>
  <div id="DetailBottomBar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>
<style scoped>
#DetailBottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 49px;
  display: flex;
  text-align: center;
}
.bar-item {
  display: flex;
  flex: 1;
}
.bar-item div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px; /*上边距 左右边距 下边距*/
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 17px;
  line-height: 49px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
  color: #fff;
}
</style>