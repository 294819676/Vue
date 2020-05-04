<template>
  <div id="app">
    {{ text }}
    <h3>------------------------</h3>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      text: ""
    };
  },
  created() {
    // axios({
    //   url: "https://httpbin.org/absolute-redirect/4"
    // }).then(res => {
    //   this.text = res;
    // });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
