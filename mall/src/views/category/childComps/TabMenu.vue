<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{ activated: currentIndex == index }"
        @click="itemClick(index)"
      >{{ item.title }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "",
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {
    // this.$nextTick(() => {
    //   console.log("hahahahah");
    //   this.$refs.scroll.refresh();
    // });
    // setTimeout(() => {
    //   console.log("gagagag");
    //   this.$refs.scroll.refresh();
    // }, 200);
  },
  mounted() {},
  components: {
    Scroll
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid rgba(78, 75, 75, 0.01);
}
.activated {
  color: var(--color-high-text);
  font-weight: 700;
  border-left: 3px solid var(--color-high-text);
}
</style>
