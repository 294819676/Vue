<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in title"
      :key="index"
      @click="ControlClick(index)"
      :class="{activated:currentIndex==index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ControlClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style scoped>
.tab-control {
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
}
.tab-control div {
  flex: 1;
}
.activated {
  color: var(--color-high-text);
}
.activated span {
  padding: 5px;
  border-bottom: 2.5px solid var(--color-tint);
}
</style>