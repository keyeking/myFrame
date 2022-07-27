export let BASE_URL = ''
export const TIME_OUT = 10000
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://82.157.69.115:3000' //填写请求地址
} else if (process.env.NODE_ENV == 'production') {
  // BASE_URL = 'http://127.0.0.1:3000'//填写请求地址
} else {
  // BASE_URL = 'http://127.0.0.1:3000'//填写请求地址
}
