import axios from "axios";
export function request(config) {
  return new Promise((resolve, reject) => {
    //创建网络请求
    const instance1 = axios.create({
      baseURL: "",
      timeout: 5000
    });
    //拦截器
    instance1.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        console.log(err);
      }
    );
    instance1.interceptors.response.use(
      res => {
        return res.data;
      },
      err => {
        console.log(err);
      }
    );
    //真正的网络请求
    instance1(config)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
