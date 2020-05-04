<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scorll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    //监听滚动位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("刷新");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>
<style></style>
