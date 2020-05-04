<template>
  <div id="detail">
    <ChildNavBar class="detail-navbar" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <div>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <DetailBaseInfo :goods="goods"></DetailBaseInfo>
        <DetailShopInfo :shop="shop"></DetailShopInfo>
        <detail-params :params="itemParams" ref="params" />
        <detail-comment-info :commentInfo="commentInfo" ref="comment" />
        <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" ref />
        <detail-recommends-info ref="recommends" />
        <goods-list :goods="recommendsInfo" />
      </div>
    </scroll>
    <back-top v-show="isBackTop" @click.native="backClick" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import { getDetail, getRecommend, Goods, Shop, Params } from "network/detail";
import { debounce } from "common/utils";
import ChildNavBar from "./childComps/ChildNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendsInfo from "./childComps/DetailRecommendsInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import { backTopMixin } from "@/common/mixin";
import GoodsList from "components/content/goods/GoodsList";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendsInfo: [],
      themeHeights: [],
      getThemeY: null,
      judge: null,
      isBackTop: false
    };
  },
  created() {
    //第一步 获取iid
    this.iid = this.$route.params.iid;

    //第二步 通过iid发送网络请求
    getDetail(this.iid).then(res => {
      const data = res.result;

      //读取顶部的图片数据
      this.topImages = res.result.itemInfo.topImages;

      // 通过Goods类获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //通过Shop类获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //保存商品的详细信息
      this.detailInfo = data.detailInfo;

      // 保存商品的参数信息;
      this.itemParams = new Params(data.itemParams);

      // 保存评论信息;
      data.rate.cRate !== 0 ? (this.commentInfo = data.rate.list[0]) : "";
      this.$nextTick(() => {
        //根据最新的数据，对应的DOM已经被渲染出来了
        //但是图片依然没有加载完
        // this.themeHeights.push(0);
        // this.themeHeights.push(this.$refs.params.$el.offsetTop);
        // this.themeHeights.push(this.$refs.comment.$el.offsetTop);
        // this.themeHeights.push(this.$refs.recommends.$el.offsetTop);
        // console.log(this.themeHeights);
      });
    });
    getRecommend().then(res => {
      this.recommendsInfo = res.data.list;
    });
    this.getThemeY = debounce(() => {
      this.themeHeights.push(0);
      this.themeHeights.push(this.$refs.params.$el.offsetTop);
      this.themeHeights.push(this.$refs.comment.$el.offsetTop);
      this.themeHeights.push(this.$refs.recommends.$el.offsetTop);
      this.themeHeights.push(Number.MAX_VALUE);
    }, 200);
  },
  mounted() {
    this.$bus.$on("detailImgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  components: {
    ChildNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    DetailRecommendsInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getThemeY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeHeights[index], 200);
    },
    contentScroll(position) {
      //获取y值
      const positionY = -position.y;
      this.listenShow(positionY);
      // positionY > 550 ? (this.isBackTop = true) : (this.isBackTop = false);
      //positionY和主题中值进行对比
      const length = this.themeHeights.length;
      // ! 复杂版本
      // for (let i = 0; i < length; i++) {
      //   if (
      //     i != this.judge &&
      //     ((i < length - 1 &&
      //       positionY > this.themeHeights[i] &&
      //       positionY < this.themeHeights[i + 1]) ||
      //       (i == length - 1 && positionY > this.themeHeights[i]))
      //   ) {
      //     this.judge = i;
      //     this.$refs.nav.currentIndex = this.judge;
      //   }
      // }
      // ! hack版本
      //判断所处高度在哪一段位置
      for (let i = 0; i < length - 1; i++) {
        if (
          this.judge != i &&
          positionY > this.themeHeights[i] &&
          positionY < this.themeHeights[i + 1]
        ) {
          this.judge = i;
          this.$refs.nav.currentIndex = this.judge;
        }
      }
    },
    addToCart() {
      //1.获取购物车需要的信息
      let product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;

      //2.将商品添加到购物车
      //! Actions可以返回一个Promise
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res);
      });
    }
  }
};
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
