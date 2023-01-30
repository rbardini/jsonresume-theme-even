import html from '../utils/html.js'
import markdown from '../utils/markdown.js'

export default function Meta(basics = {}) {
  const { name, summary } = basics

  return html`
    ${name && html`<title>${name}</title>`}
    ${summary && html`<meta name="description" content="${markdown(summary, true)}">`}
  `
}
