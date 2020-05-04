<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <!-- {{goods}} -->
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span
        v-if="goods.discount"
        class="discount"
        :style="{backgroundColor:goods.discountBgColor}"
      >{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  width: 100%;
  margin-top: 15px;
  padding: 0 7px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  font-size: 18px;
  text-align: justify; /* 实现两端对齐文本效果 */
  color: #222222;
}
.info-price {
  margin-top: 10px;
}
.new-price {
  font-size: 24px;
  color: #ff5777;
}
.old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  color: #ffffff;
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -4px;
  margin-left: 5px;
  padding: 3px 6px;
}
.info-other {
  font-size: 13px;
  line-height: 30px; /*设置行高 */
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 13px;
  color: #333333;
}
.info-services img {
  height: 13px;
  width: 13px;
  position: relative;
  top: 2px;
}
.info-services span {
  margin-left: 5px;
}
</style>