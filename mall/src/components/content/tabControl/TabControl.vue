<template>
  <div class="tabcontrol">
    <div
      class="tabcontrol-item"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index===currentindex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "TarControl",
  data() {
    return {
      currentindex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  methods: {
    itemClick(index) {
      this.currentindex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tabcontrol-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>