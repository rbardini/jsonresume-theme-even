import html from '../utils/html.js'

export default function Skills(skills = []) {
  return skills.length > 0 && html`
    <section id="skills">
      <h3>Skills</h3>
      <div class="grid-list">
        ${skills.map(({ keywords = [], name }) => html`
          <div>
            ${name && html`<h4>${name}</h4>`}
            ${keywords.length > 0 && html`
              <ul class="tag-list">
                ${keywords.map(keyword => html`<li>${keyword}</li>`)}
              </ul>
            `}
          </div>
        `)}
      </div>
    </section>
  `
}
