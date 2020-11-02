import { parseISO, format } from 'date-fns'
import { SHOW_DATE } from '@/lib/constants'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return SHOW_DATE ? (<time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>) : ("")
}
