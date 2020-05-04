<template>
  <div id="ChildNavBar">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt @click="backClick" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="item"
          @click="activate(index)"
          :class="{activated:currentIndex==index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  components: {
    NavBar
  },
  methods: {
    activate(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.titles {
  display: flex;
  font-size: 15px;
}
.item {
  flex: 1;
}
.activated {
  color: red;
}
.back img {
  margin-top: 10px;
  height: 25px;
  width: 25px;
}
</style>