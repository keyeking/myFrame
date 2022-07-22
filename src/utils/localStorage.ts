import timeFunction from './time'
const storage: Storage = window.localStorage
let endTime: number = 0 //设置的到期时间戳
let setTime: number = 0 //存储的时间
// 存储
function set(data: any, time: number): void {
  const keys: string[] = Object.keys(data)
  const values: string[] = Object.values(data)
  keys.forEach((item: string, index: number) => {
    const key: string = keys[index]
    const value: string = values[index] ? values[index] : ''
    storage.setItem(key, value)
  })
  // 获取存储的时间
  setTime = new Date().getTime()
  //获取自定义过期的时间的时间戳
  // 一天的时间戳
  const stamp: number = 60 * 60 * 24 * 1000
  endTime = new Date().getTime() + time * stamp
}
// 获取
function get(data: string) {
  const getTime: number = new Date().getTime()
  if (getTime - setTime > endTime) {
    // 时间到期了，清除
    clear()
    return undefined
  } else {
    return storage.getItem(data)
  }
}
// 清空
function clear(): void {
  storage.clear()
}
// 删除某一个
function remove(data: string): void {
  storage.removeItem(data)
}
const localStorage = {
  get,
  set,
  clear,
  remove,
}
export default localStorage
