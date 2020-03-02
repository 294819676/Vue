export default {
  PowerCounter(state) {
    return state.counter * state.counter;
  },
  more15(state) {
    return state.stu.filter(s => s.age > 15); //返回的是一个Array数组
  },
  morex(state) {
    //若需要传入参数，则返回一个函数
    // return function(age) {
    //   return state.stu.filter(s => s.age > age);
    // };
    return age => {
      return state.stu.filter(s => s.age > age); //返回的是一个函数
    };
  },
  more15Counter(state, getters) {
    return getters.more15.length;
  }
};
