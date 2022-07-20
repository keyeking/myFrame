const storage: Storage = window.localStorage
let timer: number = 100000 //设置的到期时间
let setTime: number = 0 //存储的时间
// 存储
function set(data: any, time: number): void {
  timer = time
  const keys: string[] = Object.keys(data)
  const values: string[] = Object.values(data)
  keys.forEach((item: string, index: number) => {
    const key: string = keys[index]
    const value: string = values[index] ? values[index] : ''
    storage.setItem(key, value)
  })
  setTime = new Date().getTime()
}
// 获取
function get(data: string) {
  const getTime: number = new Date().getTime()
  if (getTime - setTime > timer) {
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
