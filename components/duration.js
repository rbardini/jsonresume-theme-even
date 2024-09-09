import { html } from '@rbardini/html'
import Date from './date.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function Duration(startDate, endDate) {
  if (endDate === startDate) return Date(endDate)
  return html`<time-duration>${Date(startDate)} – ${endDate ? Date(endDate) : 'Present'}</time-duration>`
}
