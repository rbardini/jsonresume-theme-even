import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['volunteer']} volunteer
 * @returns {string | false}
 */
export default function Volunteer(volunteer = []) {
  return (
    volunteer.length > 0 &&
    html`
      <section id="volunteer">
        <h3>Volunteer</h3>
        <div class="stack">
          ${volunteer.map(
            ({ highlights = [], organization, position, startDate, endDate, summary, url }) => html`
              <article class="display-unit">
                <header>
                  <h4>${Link(url, organization)}</h4>
                  <div class="meta">
                    <strong>${position}</strong>
                    ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                  </div>
                </header>
                ${summary && markdown(summary)}
                ${highlights.length > 0 &&
                html`
                  <ul>
                    ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
                  </ul>
                `}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
