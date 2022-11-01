import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
// 解析
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
dayjs.extend(utc)

const DATA_TIME_FORMAR = 'YYYY/MM/DD HH:mm:ss'

// utc格式转换
export function formatUtcString(utcString: string, format: string = DATA_TIME_FORMAR) {
  if (utcString) {
    return dayjs.utc(utcString).utcOffset(8).format(format)
  }
  return ''
}
// 时间戳格式转换
export function formatTimeStamp(timeString: number, format: string = DATA_TIME_FORMAR) {
  if (timeString) {
    return dayjs(timeString).format(format)
  }
  return ''
}
