<template>
  <div v-if="Object.keys(detailInfo).length !== 0" id="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img :src="image" alt v-for="(image, order) in item.list" :key="order" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      goodsLength: 0,
      count: 0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.count == this.goodsLength) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      this.goodsLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
#goods-info {
  padding: 10px 10px;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc .start {
  position: relative;
  width: 90px;
  height: 2px;
  background-color: #a3a3a5;
  float: left;
}
.info-desc .end {
  position: relative;
  width: 90px;
  height: 2px;
  background-color: #a3a3a5;
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333333;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .start::before {
  bottom: -2px;
}
.info-desc {
  padding: 10px 0;
}
.desc {
  font-size: 13px;
  padding: 15px 0;
}
.info-key {
  font-size: 13px;
  padding: 6px 0;
}
.info-list img {
  width: 100%;
}
</style>
