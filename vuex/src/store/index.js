import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import modulesA from "./modulesA/modulesA";
Vue.use(Vuex);

const state = {
  counter: 1000,
  stu: [
    { name: "Kobe", age: 18, height: 1.97 },
    { name: "JYH", age: 20, height: 1.76 },
    { name: "Curry", age: 14, height: 1.8 },
    { name: "James", age: 16, height: 1.9 }
  ],
  info: { name: "JYH", age: 20, birth: "1999.10.20", address: "Amoy" }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a: modulesA
  },
  getters
});
