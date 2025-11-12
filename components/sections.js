import { html } from '@rbardini/html'
import Awards from './awards.js'
import Certificates from './certificates.js'
import Education from './education.js'
import Interests from './interests.js'
import Languages from './languages.js'
import Projects from './projects.js'
import Publications from './publications.js'
import References from './references.js'
import Skills from './skills.js'
import Volunteer from './volunteer.js'
import Work from './work.js'

const sectionComponentMap = {
  work: (resume, label) => Work(resume.work, label),
  volunteer: (resume, label) => Volunteer(resume.volunteer, label),
  education: (resume, label) => Education(resume.education, label),
  projects: (resume, label) => Projects(resume.projects, label),
  awards: (resume, label) => Awards(resume.awards, label),
  certificates: (resume, label) => Certificates(resume.certificates, label),
  publications: (resume, label) => Publications(resume.publications, label),
  skills: (resume, label) => Skills(resume.skills, label),
  languages: (resume, label) => Languages(resume.languages, label),
  interests: (resume, label) => Interests(resume.interests, label),
  references: (resume, label) => References(resume.references, label),
}

export default function Sections(resume) {
  const sections = resume.meta?.sections || Object.keys(sectionComponentMap)
  const sectionLabels = resume.meta?.sectionLabels || {}

  return html`${sections.map(section => {
    let label = sectionLabels[section] || section
    label = `${label.charAt(0).toUpperCase()}${label.slice(1)}`
    return sectionComponentMap[section]?.(resume, label) || null
  })}`
}
