export default {
  aUpdate(context, playload) {
    // context:上下文
    //异步操作
    // setTimeout(() => {
    //   context.commit("Update");
    //   console.log(playload);
    // }, 1000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("Update");
        console.log(playload.message);
        resolve("成功反馈");
      }, 1000);
    });
  }
};
