<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
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
      default() {
        return [];
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.recommends {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 8px 0 15px;
  border-bottom: 8px solid #eeee;
}
.recommends-item {
  flex: 1;
}
.recommends-item img {
  width: 75px;
  height: 75px;
}
</style>