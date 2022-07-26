import request from '@/service'
const loginModule: any = {
  // 登录接口
  loginAccount: (data: { username: string; password: string }) => {
    return request.post({
      url: '/api/login',
      method: 'POST',
      data,
    })
  },
}
export default loginModule
