import html from '../utils/html.js'
import Date from './date.js'
import Link from './link.js'

export default function Certificates(certificates = []) {
  return certificates.length > 0 && html`
    <section id="certificates">
      <h3>Certificates</h3>
      <div class="stack">
        ${certificates.map(({ date, issuer, name, url }) => html`
          <article>
            <header>
              <h4>${Link(url, name)}</h4>
              <div class="meta">
                ${issuer && html`
                  <div>
                    Issued by <strong>${issuer}</strong>
                  </div>
                `}
                ${date && Date(date)}
              </div>
            </header>
          </article>
        `)}
      </div>
    </section>
  `
}
