import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
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
        <div class="grid-list">
          ${education.map(
            ({ area, courses = [], keywords = [], institution, startDate, endDate, studyType, url }) => html`
              <article>
                <header>
                  <h4>${Link(url, institution)}</h4>
                  <div class="meta">
                    ${area && html`<strong>${area}</strong>`}
                    ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                  </div>
                </header>
                ${studyType && markdown(studyType)}
                ${keywords.length > 0 &&
                html`
                  <ul class="tag-list">
                    ${keywords.map(keyword => html`<li>${keyword}</li>`)}
                  </ul>
                `}
                ${courses.length > 0 &&
                html`
                  <h5>Skills</h5>
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
