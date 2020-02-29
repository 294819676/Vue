<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActived">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // isActived: true
    };
  },
  computed: {
    isActived() {
      // return this.$route.path.indexOf(this.path) != -1;
      return this.path.indexOf(this.$route.path) !== -1;
      // ! = -1:找到了
    },
    activeStyle() {
      return this.isActived ? { color: this.activeColor } : {};
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tar-bar-item img {
  height: 24px;
  width: 24px;
  /* 图片底下默认有3px空白 */
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
/* .actived {
  color: red;
} */
</style>