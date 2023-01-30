import html from '../utils/html.js'
import Date from './date.js'

export default function Duration(startDate, endDate) {
  return html`${Date(startDate)} – ${endDate ? Date(endDate) : 'Present'}`
}
