<template>
  <div>
    <grid-view :cols="4">
      <div class="item" v-for="(item,index) in subCategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt />
          <div class="item-text">{{item.title}}</div>
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
    subCategories: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    GridView
  }
};
</script>
<style scoped>
.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 100%;
}

.item-text {
  margin-top: 15px;
}
</style>