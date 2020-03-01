import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 1000,
    stu: [
      { name: "Kobe", age: 18, height: 1.97 },
      { name: "JYH", age: 20, height: 1.76 },
      { name: "Curry", age: 14, height: 1.8 },
      { name: "James", age: 16, height: 1.9 }
    ],
    info: { name: "JYH", age: 20, birth: "1999.10.20", address: "Amoy" }
  },
  mutations: {
    // 更改vuex中state的唯一方法就是提交mutation，mutation的代码都是同步的
    // 想要改变state中的值，那么我们只需要在mutations中添加对应的mutation函数
    // 这个函数只需要管改变操作即可
    // 一条重要的原则就是要记住 mutation 必须是同步函数。
    increment(state) {
      //默认传入参数state
      state.counter++;
    },
    decrement(state) {
      //默认传入参数state
      state.counter--;
    },
    // addCounter(state, num) {
    //   state.counter += num;
    // },
    addCounter(state, playload) {
      // couter:计数器  count:计数
      console.log(playload); //打印的是一个对象
      state.counter += playload.count;
    },
    addStudent(state, info) {
      state.stu.push(info);
    },
    Update(state) {
      //响应式增加属性
      // Vue.set(state.info, "gender", "male");
      //响应式删除属性
      Vue.delete(state.info, "address");
    }
  },
  actions: {},
  modules: {},
  getters: {
    PowerCounter(state) {
      return state.counter * state.counter;
    },
    more15(state) {
      return state.stu.filter(s => s.age > 15);
    },
    morex(state) {
      //若需要传入参数，则返回一个函数
      // return function(age) {
      //   return state.stu.filter(s => s.age > age);
      // };
      return age => {
        return state.stu.filter(s => s.age > age);
      };
    }
  }
});
