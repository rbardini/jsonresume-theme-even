import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

export default function Volunteer(volunteer = []) {
  return volunteer.length > 0 && html`
    <section id="volunteer">
      <h3>Volunteer</h3>
      <div class="stack">
        ${volunteer.map(({ highlights = [], organization, position, startDate, endDate, summary, url }) => html`
          <article>
            <header>
              <h4>${position}</h4>
              <div class="meta">
                <strong>${Link(url, organization)}</strong>
                <div>${Duration(startDate, endDate)}</div>
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
