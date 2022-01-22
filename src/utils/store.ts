interface IData {
  [key: string]: any
}

export default {
  set(key: string, cache: IData, expire?: number): void {
    if (expire) {
      cache.expire = new Date().getTime() + expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(cache))
  },
  get(key: string): any | null {
    let cache = localStorage.getItem(key)
    if (cache) {
      const data = JSON.parse(cache) as IData
      const expire = data?.expire
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return data
      console.log(data)
    }
    return null
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}
