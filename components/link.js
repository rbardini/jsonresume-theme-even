import html from '../utils/html.js'

const formatURL = url => url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '')

export default function Link(url, name) {
  return name
    ? (url ? html`<a href="${url}">${name}</a>` : name)
    : url && html`<a href="${url}">${formatURL(url)}</a>`
}
