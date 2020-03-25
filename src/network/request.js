import axios from 'axios'



export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    
    // 用于手机访问接口数据的ngrok接口
    baseURL: '/devapi',
    timeout: 5000,
    
  })
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
  
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  
  // 3.发送真正的网络请求 本质上axios是返回一个promise
  return instance(config)
}
