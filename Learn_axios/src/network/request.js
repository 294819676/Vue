import axios from "axios";
// 对应HelloWorld.vue方法一
// export function request(config, success, failed) {
//   //创建实例
//   const instance1 = axios.create({
//     baseURL: "https://httpbin.org",
//     timeout: 5000
//   });
//   //发送真正的网络请求
//   instance1(config)
//     .then(result => {
//       success(result);
//     })
//     .catch(error => {
//       failed(error);
//     });
// }
// 对应HelloWorld.vue方法二

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance1 = axios.create({
      baseURL: "https://httpbin.org",
      timeout: 5000
    });
    // 2.axios的拦截器
    instance1.interceptors.request.use(
      config => {
        console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时，都希望在界面显示一个请求的图标
        // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
        return config;
      },
      err => {
        console.log(err);
      }
    );
    instance1.interceptors.response.use(
      res => {
        console.log(res);
        return res.data;
      },
      err => {
        console.log(err);
      }
    );

    // 3.真正的网络请求
    instance1(config)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
