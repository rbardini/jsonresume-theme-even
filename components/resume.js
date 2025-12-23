import { html } from '@rbardini/html'
import colors from '../utils/colors.js'
import Awards from './awards.js'
import Certificates from './certificates.js'
import Education from './education.js'
import Header from './header.js'
import Interests from './interests.js'
import Languages from './languages.js'
import Meta from './meta.js'
import Projects from './projects.js'
import Publications from './publications.js'
import References from './references.js'
import Skills from './skills.js'
import Volunteer from './volunteer.js'
import Work from './work.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema} resume
 * @param {object} [options]
 * @param {string} [options.css]
 * @param {string} [options.js]
 * @returns
 */
export default function Resume(resume, { css, js } = {}) {
  const iconSet = resume.meta?.themeOptions?.icons?.toLowerCase?.() === 'fontawesome' ? 'fontawesome' : 'feather'
  return html`<!doctype html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${css &&
        html`<style>
          ${css}
        </style>`}
        ${js &&
        html`<script type="module">
          ${js}
        </script>`}
      </head>
      <body>
        ${Header(resume.basics, { iconSet })} ${Work(resume.work)} ${Volunteer(resume.volunteer)}
        ${Education(resume.education)} ${Projects(resume.projects)} ${Awards(resume.awards)}
        ${Certificates(resume.certificates)} ${Publications(resume.publications)} ${Skills(resume.skills)}
        ${Languages(resume.languages)} ${Interests(resume.interests)} ${References(resume.references)}
      </body>
    </html>`
}
