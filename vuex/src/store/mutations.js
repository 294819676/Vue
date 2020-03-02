export default {
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
  //对应提交风格一
  //   state.counter += num;
  // },
  addCounter(state, playload) {
    // 对应提交风格二
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
};
