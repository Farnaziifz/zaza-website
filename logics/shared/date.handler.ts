// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pd from 'persian-date'
import _ from 'lodash'
import momentJalali from 'jalali-moment'



export const getPersianNameOfMonth = (date: string, format: string) =>
  momentJalali(date, format).locale('fa').format('MMMM')
export const getPersianYear = (date: string, format: string) =>
  momentJalali(date, format).format('YYYY')

export const convertDateArrayToDateString = (dateArray: Date[] | string[]) => {
  if (!_.isEmpty(dateArray)) {
    if (dateArray[0] instanceof Date) {
      return `${new pd(dateArray[0])
        .toLocale('fa')
        .format('YYYY/MM/DD')}, ${new pd(dateArray[1])
        .toLocale('fa')
        .format('YYYY/MM/DD')}`
    }

    return `${new pd(convertDateFromPersianToGeorgian(dateArray[0]))
      .toLocale('fa')
      .format('YYYY/MM/DD')}, ${new pd(
      convertDateFromPersianToGeorgian(dateArray[1] as string)
    )
      .toLocale('fa')
      .format('YYYY/MM/DD')}`
  }

  return ``
}

export const convertDateFromPersianToGeorgian = (
  date: string | Date
): Date | undefined =>
  typeof date === 'string'
    ? new pd(date.split('/').map((x: string) => _.toNumber(x))).toDate()
    : date

export const convertDateTimeFromPersianToGeorgian = (
  date: string
): Date | undefined => {
  const p = new pd(
    date
      .split(' ')
      .flatMap((x, index) => (index === 0 ? x.split('/') : x.split(':')))
      .map((x) => _.toNumber(x))
  ).toDate()
  return p
}
