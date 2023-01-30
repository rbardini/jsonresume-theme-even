import Awards from './components/awards.js'
import Certificates from './components/certificates.js'
import Education from './components/education.js'
import Header from './components/header.js'
import Interests from './components/interests.js'
import Languages from './components/languages.js'
import Meta from './components/meta.js'
import Projects from './components/projects.js'
import Publications from './components/publications.js'
import References from './components/references.js'
import Skills from './components/skills.js'
import Volunteer from './components/volunteer.js'
import Work from './components/work.js'
import html from './utils/html.js'

export default function Resume(resume, css) {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
        <style>${css}</style>
      </head>
      <body>
        ${Header(resume.basics)}
        ${Work(resume.work)}
        ${Volunteer(resume.volunteer)}
        ${Education(resume.education)}
        ${Projects(resume.projects)}
        ${Awards(resume.awards)}
        ${Certificates(resume.certificates)}
        ${Publications(resume.publications)}
        ${Skills(resume.skills)}
        ${Languages(resume.languages)}
        ${Interests(resume.interests)}
        ${References(resume.references)}
      </body>
    </html>`
}
