<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="icon_activated" />
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="icon_activated" />
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/cart_active.svg" alt slot="icon_activated" />
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt slot="icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="icon_activated" />
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped></style>
