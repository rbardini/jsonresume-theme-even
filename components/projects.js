import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import DateTimeDuration from './date-time-duration.js'
import Link from './link.js'

/**
 * @param {string[]} roles
 * @returns {string}
 */
const formatRoles = roles => (Intl.ListFormat ? new Intl.ListFormat('en').format(roles) : roles.join(', '))

/**
 * @param {import('../schema.d.ts').ResumeSchema['projects']} projects
 * @param {{ groupByType?: boolean }} [options]
 * @returns {string | false}
 */
export default function Projects(projects = [], { groupByType = false } = {}) {
  if (projects.length === 0) return false

  const renderProjects = list => html`
    <div class="stack">
      ${list.map(
        ({
          description,
          entity,
          highlights = [],
          keywords = [],
          name,
          startDate,
          endDate,
          roles = [],
          type,
          url,
        }) => html`
          <article>
            <header>
              <h4>${Link(url, name)}</h4>
              <div class="meta">
                <div>
                  ${roles.length > 0 && html`<strong>${formatRoles(roles)}</strong>`}
                  ${roles.length > 0 && entity && html`at `}
                  ${entity && html`<strong>${markdown(entity).replace(/^<p>|<\/p>$/g, '')}</strong>`}
                </div>
                ${startDate && html`<div>${DateTimeDuration(startDate, endDate)}</div>`}
                ${type && !groupByType && html`<div>${type}</div>`}
              </div>
            </header>
            ${description && markdown(description)}
            ${highlights.length > 0 &&
            html`
              <ul>
                ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
              </ul>
            `}
            ${keywords.length > 0 &&
            html`
              <ul class="tag-list">
                ${keywords.map(keyword => html`<li>${keyword}</li>`)}
              </ul>
            `}
          </article>
        `,
      )}
    </div>
  `

  if (!groupByType) {
    return html`
      <section id="projects">
        <h3>Projects</h3>
        ${renderProjects(projects)}
      </section>
    `
  }

  const groups = projects.reduce((acc, project) => {
    const type = project.type?.trim() || 'Projects'
    acc[type] = acc[type] || []
    acc[type].push(project)
    return acc
  }, /** @type {Record<string, NonNullable<import('../schema.d.ts').ResumeSchema['projects']>[number][]>} */ ({}))

  const slugify = type =>
    type
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'projects'

  return html`
    ${Object.entries(groups).map(
      ([type, items]) => html`
        <section id="${slugify(type) === 'projects' ? 'projects' : `projects-${slugify(type)}`}">
          <h3>${type}</h3>
          ${renderProjects(items)}
        </section>
      `,
    )}
  `
}
