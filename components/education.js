import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import DateTimeDuration from './date-time-duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['education']} education
 * @returns {string | false}
 */
export default function Education(education = []) {
  return (
    education.length > 0 &&
    html`
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
          ${education.map(
            ({ area, courses = [], institution, startDate, endDate, studyType, url }) => html`
              <article>
                <header>
                  <h4>${Link(url, institution)}</h4>
                  <div class="meta">
                    <div>${[studyType, area && html`<strong>${area}</strong>`].filter(Boolean).join(' in ')}</div>
                    ${startDate && html`<div>${DateTimeDuration(startDate, endDate)}</div>`}
                  </div>
                </header>
                ${courses.length > 0 &&
                html`
                  <h5>Courses</h5>
                  <ul>
                    ${courses.map(course => html`<li>${markdown(course)}</li>`)}
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
