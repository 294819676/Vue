import axios from "axios";
export function request(config) {
  return new Promise((resolve, reject) => {
    //创建网络请求
    const instance1 = axios.create({
      baseURL: "http://106.54.54.237:8000/api/h8",
      timeout: 5000
    });
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
