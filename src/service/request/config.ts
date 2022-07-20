export let BASE_URL = ''
export const TIME_OUT = 10000
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'https://httpbin.org/dev'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'https://httpbin.org/pro'
} else {
  BASE_URL = 'https://httpbin.org/test'
}
