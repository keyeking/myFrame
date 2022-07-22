/*
  毫秒转为正常格式时间过滤器
  编写过滤器传入需要的时间格式，例如：yyyy-MM-dd hh:mm:ss或者yyyy年MM月dd日
  注意：月MM必须大写，目的为了区分月与分，其他都为小写
  时间格式定义：
    参数为0格式：yyyy-MM-dd hh:mm:ss
    参数为1格式：yyyy-MM-dd
    参数为2格式：hh:mm:ss
    参数为3格式：yyyy年MM月dd日 hh时mm分ss秒
    参数为4格式：yyyy年MM月dd日
    参数为5格式：hh时mm分ss秒
    参数为6格式：yyyy年MM月
    参数为7格式：yyyy
    参数为8格式：yyyy/MM/dd
*/

const formatDate = (dateParams: Date, fmt: string) => {
  const date: Date = new Date(dateParams)

  if (fmt == '0') {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  } else if (fmt == '1') {
    fmt = 'yyyy-MM-dd'
  } else if (fmt == '2') {
    fmt = 'hh:mm:ss'
  } else if (fmt == '3') {
    fmt = 'yyyy年MM月dd日 hh时mm分ss秒'
  } else if (fmt == '4') {
    fmt = 'yyyy年MM月dd日'
  } else if (fmt == '5') {
    fmt = 'hh时mm分ss秒'
  } else if (fmt == '6') {
    fmt = 'yyyy年MM月'
  } else if (fmt == '7') {
    fmt = 'yyyy'
  } else if (fmt == '8') {
    fmt = 'yyyy/MM/dd'
  } else if (fmt == '9') {
    fmt = 'hh:mm'
  } else if (fmt == '10') {
    fmt = 'MM-dd hh:mm'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  const o = {
    'M+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'h+': date.getHours().toString(),
    'm+': date.getMinutes().toString(),
    's+': date.getSeconds().toString(),
  }
  const keys: string[] = Object.keys(o)
  const values: string[] = Object.values(o)
  keys.forEach((item: string, index: number) => {
    if (new RegExp(`(${item})`).test(fmt)) {
      const temp: string = values[index]
      const str = temp + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str),
      )
    }
  })
  // for (const k in o) {
  //   if (new RegExp(`(${k})`).test(fmt)) {
  //     const temp: string = o[k]
  //     const str = temp + ''
  //     fmt = fmt.replace(
  //       RegExp.$1,
  //       RegExp.$1.length === 1 ? str : padLeftZero(str),
  //     )
  //   }
  // }
  return fmt
}
/* 一位数两位数转换 */
const padLeftZero = (str: string): string => {
  return ('00' + str).substr(str.length)
}

/* 获取当前时间戳 */
const getUnix = () => {
  const date: Date = new Date()
  return date.getTime()
}

/* 获取今天0点0分0秒的时间戳 */
const getTodayUnix = () => {
  const date: Date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

/* 获取今年1月1日0点0分0秒的时间戳 */
const getYearUnix = () => {
  const date: Date = new Date()
  date.setMonth(0)
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

/* 获取标准年月日 */
const getLastDate = (time: string) => {
  const date: Date = new Date(parseInt(time))
  const month =
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day: string | number =
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return date.getFullYear() + '/' + month + '/' + day
}

/*
  获取发送消息时间过滤器
  还用过滤器就可以实现转换
*/

const getFormatTime = (timestamp: string) => {
  const time: number = Number(timestamp)
  const now: number = getUnix() //当前时间戳
  const today: number = getTodayUnix() //今天0点时间戳
  const year: number = getYearUnix() //今年0点时间戳
  const timer: number = (now - time) / 1000 // 转换为秒级时间戳
  let tip: string = ''

  if (timer <= 0) {
    tip = '刚刚'
  } else if (Math.floor(timer / 60) <= 0) {
    tip = '刚刚'
  } else if (timer < 3600) {
    tip = Math.floor(timer / 60) + '分钟前'
  } else if (timer >= 3600 && time - today >= 0) {
    tip = Math.floor(timer / 3600) + '小时前'
  } else if (timer / 86400 <= 31) {
    tip = Math.ceil(timer / 86400) + '天前'
  } else {
    tip = getLastDate(timestamp)
  }
  return tip
}

/* 获取周（星期） */
const getWeek = (date: number) => {
  const datelist: string[] = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  const weekDay: string = datelist[new Date(date).getDay()]
  return weekDay
}

// 时间戳转时分秒
const timeChange = (data: any) => {
  const date = new Date(data * 1000)
  const hh =
    date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
  const mm =
    date.getMinutes() < 10
      ? '0' + date.getMinutes() + ':'
      : date.getMinutes() + ':'
  const ss =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return hh + mm + ss
}

// 年月日时分秒转时间戳
const getTimeFormat = (timeS: any) => {
  const time = new Date(timeS).getTime() / 1000 //除1000 是变成秒级的时间戳 不除就是毫秒级
  return time
}

// 时间戳转年月日时分秒
const timestampToTime = (cjsj: any) => {
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const date: Date = new Date(cjsj * 1000)
  const Y: string = date.getFullYear() + '-'
  const M: string =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const D: string =
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  const h: string =
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  const m: string =
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  const s: string | number =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}
/* 时间戳转时分秒 */
const timeToNormalTime = (timestamp: number) => {
  let hh: number = parseInt((timestamp / 3600).toString())
  if (hh < 10) {
    hh = parseInt('0' + hh)
  }
  let mm: number = parseInt(((timestamp - hh * 3600) / 60).toString())
  if (mm < 10) {
    mm = parseInt('0' + mm)
  }
  let ss: number = parseInt(((timestamp - hh * 3600) % 60).toString())
  if (ss < 10) {
    ss = parseInt('0' + ss)
  }
  const time: string = hh + ':' + mm + ':' + ss
  if (timestamp > 0) {
    return time
  } else {
    return '00:00:00'
  }
}

const time = {
  formatDate,
  getFormatTime,
  getWeek,
  timeChange,
  getTimeFormat,
  timestampToTime,
  timeToNormalTime,
}
export default time
