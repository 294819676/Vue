<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tar-bar>
      <TarBaritem path="/Home" activeColor="red">
        <div slot="item-name">首页</div>
        <img src="~assets/img/tarbar/home.png" alt slot="item-icon" />
        <img src="~assets/img/tarbar/home.actived.png" alt slot="item-icon-active" />
      </TarBaritem>
      <TarBaritem path="/Category" activeColor="red">
        <div slot="item-name">分类</div>
        <img src="~assets/img/tarbar/category.png" alt slot="item-icon" />
        <img src="~assets/img/tarbar/category.actived.png" alt slot="item-icon-active" />
      </TarBaritem>
      <TarBaritem path="/Cart" activeColor="red">
        <div slot="item-name">购物车</div>
        <img src="~assets/img/tarbar/cart.png" alt slot="item-icon" />
        <img src="~assets/img/tarbar/cart.actived.png" alt slot="item-icon-active" />
      </TarBaritem>
      <TarBaritem path="/User">
        <div slot="item-name">我的</div>
        <img src="~assets/img/tarbar/user.png" alt slot="item-icon" />
        <img src="~assets/img/tarbar/user.actived.png" alt slot="item-icon-active" />
      </TarBaritem>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "components/common/tarbar/TarBar.vue";
import TarBaritem from "components/common/tarbar/TarBaritem";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  components: {
    TarBar,
    TarBaritem
  }
};
</script>
<style></style>
