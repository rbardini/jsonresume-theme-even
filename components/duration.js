import { html } from '@rbardini/html'
import DateTime from './date-time.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function Duration(startDate, endDate) {
  if (endDate === startDate) return DateTime(endDate)
  return html`<time-duration>${DateTime(startDate)} – ${endDate ? DateTime(endDate) : 'Present'}</time-duration>`
}
