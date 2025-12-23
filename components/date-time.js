import { html } from '@rbardini/html'

/**
 * @param {string} dateString
 * @returns {string}
 */
const formatDate = dateString => {
  const hasMonth = /-\d{1,2}/.test(dateString)
  return new Date(dateString).toLocaleDateString('en', {
    month: hasMonth ? 'short' : undefined,
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/**
 * @param {string} date
 * @returns {string}
 */
export default function DateTime(date) {
  return html`<time datetime="${date}">${formatDate(date)}</time>`
}
