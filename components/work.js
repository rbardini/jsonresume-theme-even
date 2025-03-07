import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/** @typedef {NonNullable<import('../schema.d.ts').ResumeSchema['work']>[number]} Work */
/** @typedef {Pick<Work, 'highlights' | 'location' | 'position' | 'startDate' | 'endDate' | 'summary'>} NestedWorkItem */
/** @typedef {Pick<Work, 'description' | 'name' | 'url'> & { items: NestedWorkItem[] }} NestedWork */

/**
 * @param {import('../schema.d.ts').ResumeSchema['work']} work
 * @returns {string | false}
 */
export default function Work(work = []) {
  const nestedWork = work.reduce((acc, { description, name, url, ...rest }) => {
    const prev = acc[acc.length - 1]
    if (prev && prev.name === name && prev.description === description && prev.url === url) prev.items.push(rest)
    else acc.push({ description, name, url, items: [rest] })
    return acc
  }, /** @type {NestedWork[]} */ ([]))

  return (
    work.length > 0 &&
    html`
      <section id="work">
        <h3>Work</h3>
        <div class="stack">
          ${nestedWork.map(
            ({ description, name, url, items = [] }) => html`
              <article class="display-unit">
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">${description && html`<div>${description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${items.map(
                    ({ highlights = [], location, position, startDate, endDate, summary }) => html`
                      <div>
                        <div>
                          <h5>${position}</h5>
                          <div class="meta">
                            ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                            ${location && html`<div>${location}</div>`}
                          </div>
                        </div>
                        ${summary && markdown(summary)}
                        ${highlights.length > 0 &&
                        html`
                          <ul>
                            ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
                          </ul>
                        `}
                      </div>
                    `,
                  )}
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
