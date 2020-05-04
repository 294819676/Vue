<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!activated">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon_activated"></slot>
    </div>
    <div :class="{activated:activated}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    path: String
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    activated() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  text-align: center;
  flex: 1;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.activated {
  color: var(--color-tint);
}
</style>
