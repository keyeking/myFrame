const storage: Storage = window.localStorage
class localStorage {
  // 存储
  set(data: any): void {
    const keys: string[] = Object.keys(data)
    const values: string[] = Object.values(data)
    keys.forEach((item: string, index: number) => {
      const key: string = keys[index]
      const value: string = values[index] ? values[index] : ''
      storage.setExpire(key, value)
    })
  }
  // 获取
  get(data: string) {
    // console.log(storage.getItem(data),
    return storage.getItem(data)
  }
  // 清空
  clear(): void {
    storage.clear()
  }
  // 删除某一个
  remove(data: string): void {
    storage.removeItem(data)
  }
}
export default localStorage
