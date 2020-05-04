import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

//https://httpbin.org/#/
// 常见的配置选项
// 自定义的请求头:header
// 请求前的数据处理:transformRequest
// method:'get'->parmas{}
// method:'post'->data{}
// axios.defaults.baseURL = "https://httpbin.org";
// axios.defaults.timeout = 5000;
// axios({
//   url: "/anything",
//   method: "get"
// }).then(res => {
//   console.log(res);
// });

// axios
//   .all([
//     axios({
//       url: "/get"
//     }),
//     axios({
//       url: "/anything"
//     })
//   ])
//   .then(
//     axios.spread((result1, result2) => {
//       console.log(result1);
//       console.log(result2);
//     })
//   );
// const instance1 = axios.create({
//   baseURL: "https://httpbin.org",
//   timeout: 5000
// });
// instance1({
//   url: "/anything"
// }).then(res => {
//   console.log(res);
// });
// instance1({
//   url: "/absolute-redirect/4"
// }).then(res => {
//   console.log(res);
// });
