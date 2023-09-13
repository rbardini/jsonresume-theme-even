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
import colors from './utils/colors.js'
import html from './utils/html.js'

export default function Resume(resume, css) {
  let resumeOrder = resume.meta.order
  if (resumeOrder === undefined) {
    resumeOrder = [
      'work',
      'volunteer',
      'education',
      'projects',
      'awards',
      'certificates',
      'publications',
      'skills',
      'languages',
      'interests',
      'references',
    ]
  }

  const orderComponentMap = {
    work: Work(resume.work),
    volunteer: Volunteer(resume.volunteer),
    education: Education(resume.education),
    projects: Projects(resume.projects),
    awards: Awards(resume.awards),
    certificates: Certificates(resume.certificates),
    publications: Publications(resume.publications),
    skills: Skills(resume.skills),
    languages: Languages(resume.languages),
    interests: Interests(resume.interests),
    references: References(resume.references),
  }

  return html`<!DOCTYPE html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8">
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
        <style>${css}</style>
      </head>
      <body>
        ${Header(resume.basics)}
        ${resumeOrder.map(section => html`${orderComponentMap[section]}`)}
      </body>
    </html>`
}
