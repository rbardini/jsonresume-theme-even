import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

export default function Work(work = []) {
  return work.length > 0 && html`
    <section id="work">
      <h3>Work</h3>
      <div class="stack">
        ${work.map(({ description, highlights = [], location, name, position, startDate, endDate, summary, url }) => html`
          <article>
            <header>
              <h4>${Link(url, name)}</h4>
              <div class="meta">
                <div>
                  ${description && html`<div>${description}</div>`}
                  <strong>${position}</strong>
                </div>
                <div>${Duration(startDate, endDate)}</div>
                ${location && html`<div>${location}</div>`}
              </div>
            </header>
            ${summary && markdown(summary)}
            ${highlights.length > 0 && html`
              <ul>
                ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
              </ul>
            `}
          </article>
        `)}
      </div>
    </section>
  `
}
