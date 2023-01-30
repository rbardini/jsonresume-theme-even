import html from '../utils/html.js'

const formatDate = dateString =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

export default function Duration(date) {
  return html`<time datetime="${date}">${formatDate(date)}</time>`
}
