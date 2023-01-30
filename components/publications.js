import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Date from './date.js'
import Link from './link.js'

export default function Publications(publications = []) {
  return publications.length > 0 && html`
    <section id="publications">
      <h3>Publications</h3>
      <div class="stack">
        ${publications.map(({ name, publisher, releaseDate, summary, url }) => html`
          <article>
            <header>
              <h4>${Link(url, name)}</h4>
              <div class="meta">
                ${publisher && html`
                  <div>
                    Published by <strong>${publisher}</strong>
                  </div>
                `}
                ${releaseDate && Date(releaseDate)}
              </div>
            </header>
            ${summary && markdown(summary)}
          </article>
        `)}
      </div>
    </section>
  `
}
