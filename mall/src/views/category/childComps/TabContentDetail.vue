<template>
  <div>
    <grid-view :cols="2">
      <div v-for="(item,index) in categoryDetail" :key="index" class="content-detail">
        <a :href="item.link">
          <img :src="item.img" alt @load="imageLoad" />
          <p class="detail-text">{{item.title}}</p>
          <div class="detail-bottom">
            <div class="price">
              <span class="orgPrice">{{item.orgPrice}}￥</span>
              <span class="nowPrice">{{item.price}}￥</span>
            </div>
            <div class="fav">
              <img src="~assets/img/category/cfav.png" alt />
              <span>{{item.cfav|priceFilter}}</span>
            </div>
          </div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridview/GridView";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  props: {
    categoryDetail: {
      type: Array,
      default: []
    }
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    }
  },
  filters: {
    priceFilter(value) {
      return (value / 1000).toFixed(1) + "K";
    }
  },
  components: {
    GridView
  }
};
</script>
<style scoped>
.content-detail img {
  width: 95%;
  border-radius: 5px;
}
.detail-text {
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.detail-bottom {
  text-align: center;
  font-size: 9px;
  display: flex;
}
.detail-bottom .price {
  flex: 1;
}
.detail-bottom .fav {
  flex: 1;
}
.price .orgPrice {
  text-decoration: line-through;
  margin-right: 4px;
}
.price .nowPrice {
  font-size: 11px;
  color: var(--color-high-text);
}
.detail-bottom div {
  vertical-align: middle;
}
.detail-bottom img {
  height: 9px;
  width: 9px;
  vertical-align: middle;
}
</style>