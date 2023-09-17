import Work from "./work.js";
import Volunteer from "./volunteer.js";
import Education from "./education.js";
import Projects from "./projects.js";
import Awards from "./awards.js";
import Certificates from "./certificates.js";
import Publications from "./publications.js";
import Skills from "./skills.js";
import Languages from "./languages.js";
import Interests from "./interests.js";
import References from "./references.js";
import html from "../utils/html.js";

const sectionComponentMap = {
  work: (resume) => Work(resume.work),
  volunteer: (resume) => Volunteer(resume.volunteer),
  education: (resume) => Education(resume.education),
  projects: (resume) => Projects(resume.projects),
  awards: (resume) => Awards(resume.awards),
  certificates: (resume) => Certificates(resume.certificates),
  publications: (resume) => Publications(resume.publications),
  skills: (resume) => Skills(resume.skills),
  languages: (resume) => Languages(resume.languages),
  interests: (resume) => Interests(resume.interests),
  references: (resume) => References(resume.references),
}

export default function Sections(resume) {
  const sections = resume.meta?.sections || Object.keys(sectionComponentMap)
  return html`${sections.map(section => sectionComponentMap[section]?.(resume))}`
}
