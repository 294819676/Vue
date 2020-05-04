<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommends-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
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
    recommends: {
      type: Array,
      default: []
    }
  }
};
</script>
<style>
.recommends {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 15px;
  border-bottom: 10px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
