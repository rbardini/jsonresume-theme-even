import { html } from '@rbardini/html'

/**
 * @param {{startDate?: string, endDate?: string}[]} items
 * @returns {string}
 */
export default function Duration(items) {
  const dates = items
    .map(({ startDate, endDate }) => [startDate || '', endDate || ''])
    .flat()
    .join('|')

  return html`<time-duration dates="${dates}"></time-duration>`
}
