import { html } from '@rbardini/html'

/**
 * @param {string} dateString
 * @returns {string}
 */
const formatDate = dateString =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

/**
 * @param {string} date
 * @returns {string}
 */
export default function DateTime(date) {
  return html`<time datetime="${date}">${formatDate(date)}</time>`
}
