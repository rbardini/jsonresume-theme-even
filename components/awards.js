import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import DateTime from './date-time.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['awards']} awards
 * @returns {string | false}
 */
export default function Awards(awards = []) {
  return (
    awards.length > 0 &&
    html`
      <section id="awards">
        <h3>Awards</h3>
        <div class="stack">
          ${awards.map(
            ({ awarder, date, summary, title }) => html`
              <article class="display-unit">
                <header>
                  <h4>${title}</h4>
                  <div class="meta">
                    ${awarder && html`<div>Awarded by <strong>${awarder}</strong></div>`} ${date && DateTime(date)}
                  </div>
                </header>
                ${summary && markdown(summary)}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
