import { html } from '@rbardini/html'

/**
 * @param {{startDate?: string, endDate?: string}[]} items
 * @returns {string}
 */
export default function Duration(items) {
  const duration = items.reduce(
    (acc, { startDate, endDate }) => acc + (startDate ? +new Date(endDate || Date.now()) - +new Date(startDate) : 0),
    0,
  )

  return html`${duration > 0 && html`<time-duration duration="${duration}"></time-duration>`}`
}
