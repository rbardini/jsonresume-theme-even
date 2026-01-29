import { html } from '@rbardini/html'
import DateTime from './date-time.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['certificates']} certificates
 * @returns {string | false}
 */
export default function Certificates(certificates = []) {
  const isNote = c =>
    // “Note” entries: a URL + name, but no issuer/date/image
    c && c.name && !c.issuer && !c.date && !c.image

  const notes = certificates.filter(isNote)
  const certs = certificates.filter(c => !isNote(c))

  return (
    (notes.length > 0 || certs.length > 0) &&
    html`
      <section id="certificates">
        <h3>Certificates</h3>
        <div class="stack">
          ${notes.length > 0 &&
          html` ${notes.map(({ name, url }) => html`<div class="meta">${Link(url, name)}</div>`)} `}
          ${certs.map(
            ({ date, issuer, name, url, image }) => html`
              <article>
                <header>
                  <div style="display: flex; gap: 1rem; align-items: center;">
                    ${
                      image &&
                      html`
                        <a href="${url}" aria-label="${name}">
                          <img
                            src="${image}"
                            alt=""
                            loading="lazy"
                            style="width: 56px; height: 56px; object-fit: contain;"
                          />
                        </a>
                      `
                    }
                    <div style="min-width: 0;">
                      <h4>${Link(url, name)}</h4>
                      <div class="meta">
                        ${issuer && html`<div>Issued by <strong>${issuer}</strong></div>`} ${date && DateTime(date)}
                      </div>
                    </div>
                </header>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
