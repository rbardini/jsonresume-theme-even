import { html } from '@rbardini/html'

/**
 * @param {string} url
 * @returns {string}
 */
const formatURL = url => url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '')

/**
 * @param {string} [url]
 * @param {string} [name]
 * @returns {string | undefined}
 */
export default function Link(url, name) {
  return name ? (url ? html`<a href="${url}">${name}</a>` : name) : url && html`<a href="${url}">${formatURL(url)}</a>`
}
