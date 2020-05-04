<template>
  <div>
    <router-view></router-view>
    <tar-bar>
      <TarBaritem path="/View" activeColor="Pink">
        <div slot="item-name">首页</div>
        <img src="./assets/img/tarbar/view.png" alt slot="item-icon" />
        <img
          src="./assets/img/tarbar/view.actived.png"
          alt
          slot="item-icon-active"
        />
      </TarBaritem>
      <TarBaritem path="/Message" activeColor="Pink">
        <div slot="item-name">消息</div>
        <img src="./assets/img/tarbar/message.png" alt slot="item-icon" />
        <img
          src="./assets/img/tarbar/message.actived.png"
          alt
          slot="item-icon-active"
        />
      </TarBaritem>
      <TarBaritem path="/Cart" activeColor="Pink">
        <div slot="item-name">购物车</div>
        <img src="./assets/img/tarbar/cart.png" alt slot="item-icon" />
        <img
          src="./assets/img/tarbar/cart.actived.png"
          alt
          slot="item-icon-active"
        />
      </TarBaritem>
      <TarBaritem path="/User" activeColor="Pink">
        <div slot="item-name">我的</div>
        <img src="./assets/img/tarbar/user.png" alt slot="item-icon" />
        <img
          src="./assets/img/tarbar/user.actived.png"
          alt
          slot="item-icon-active"
        />
      </TarBaritem>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "./components/tarbar/TarBar.vue";
import TarBaritem from "./components/tarbar/TarBaritem";
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
