import html from '../utils/html.js'
import markdown from '../utils/markdown.js'

export default function References(references = []) {
  return references.length > 0 && html`
    <section id="references">
      <h3>References</h3>
      <div class="stack">
        ${references.map(({ name, reference }) => html`
          <blockquote>
            ${reference && markdown(reference)}
            ${name && html`
              <p>
                <cite>${name}</cite>
              </p>
            `}
          </blockquote>
        `)}
      </div>
    </section>
  `
}
