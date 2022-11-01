// 类具有更强的封装性
class LocalCache {
  setCache(key: string, value: any) {
    // 因为setItem接收的value是一个string类型
    // 而我们所传入的可能是一个数组，对象等，所以将value转成string类型
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      // 这里是将string转成原来的类型
      return JSON.parse(value)
    }
  }

  // 删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空所有缓存
  clearCache() {
    window.localStorage.clear
  }
}

export default new LocalCache()
