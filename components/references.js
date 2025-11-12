import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['references']} references
 * @returns {string | false}
 */
export default function References(references = [], label) {
  return (
    references.length > 0 &&
    html`
      <section id="references">
        <h3>${label}</h3>
        <div class="stack">
          ${references.map(
            ({ name, reference }) => html`
              <blockquote>
                ${reference && markdown(reference)}
                ${name &&
                html`
                  <p>
                    <cite>${name}</cite>
                  </p>
                `}
              </blockquote>
            `,
          )}
        </div>
      </section>
    `
  )
}
