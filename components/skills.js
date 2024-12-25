import { html } from '@rbardini/html'

/**
 * @param {import('../schema.d.ts').ResumeSchema['skills']} skills
 * @returns {string | false}
 */
export default function Skills(skills = []) {
  return (
    skills.length > 0 &&
    html`
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
          ${skills.map(
            ({ keywords = [], name }) => html`
              <div class="display-unit">
                ${name && html`<h4>${name}</h4>`}
                ${keywords.length > 0 &&
                html`
                  <ul class="tag-list">
                    ${keywords.map(keyword => html`<li>${keyword}</li>`)}
                  </ul>
                `}
              </div>
            `,
          )}
        </div>
      </section>
    `
  )
}
