import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "components/common/toast";
import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false;
//prototype原型
//添加事件总线对象
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);
//解决移动端300ms延迟问题 npm install fastclick --save
FastClick.attach(document.body);

//使用懒加载插件 npm install vue-lazyload --save
Vue.use(VueLazyload, {
  loading: require("./assets/img/watermark.jpg")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
