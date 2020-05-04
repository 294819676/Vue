<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      v-show="isFixed"
      ref="tabControl1"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      result: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
    };
  },
  destroyed() {},
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    // console.log("activated");
    this.$refs.scroll.scrollTo(0, this.saveY, 200);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 用于保存离开是BS的Y值
    this.saveY = this.$refs.scroll.getScrollY();
  },
  mounted() {
    // 获取tabControl的offsetTop
    // 每个组件都有一个属性$el,用于获取组件中的元素
    // setTimeout(() => {
    //   console.log(this.$refs.tabControl.$el.offsetTop);
    // }, 2000);
    // this.tabClick(0);
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImgLoad", () => {
      //事件总线
      refresh("11111", 2222, 6454554);
    });
  },
  methods: {
    /**
     *事件监听相关
     */
    tabClick(index) {
      //index:[0,1,2]
      const list = ["pop", "new", "sell"];
      this.currentType = list[index];
      this.$refs.tabControl1.currentindex = index;
      this.$refs.tabControl2.currentindex = index;
    },
    backClick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      //判断是否要显示返回顶部按钮
      this.isShow = position.y < -550;
      //判断tabControl是否吸顶(position:fixed)
      this.isFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.$refs.scroll.refresh();
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.result = res.data;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-navbar {
  color: white;
  background-color: var(--color-tint);
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  /* 设置滑动样式 */
  /* height: 200px; */

  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
