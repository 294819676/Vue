<template>
  <div>
    <h3 style="color:red">{{test}}</h3>
    <h1>{{$store.state.counter}}</h1>
    <h3 style="color:red">{{$store.state.info}}</h3>
    <button @click="UpdateInfo">update</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    UpdateInfo() {
      this.$store.commit("Update");
    },
    test() {
      return 1;
    }
  }
};
</script>
<style>
</style>