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

export default function Body(resume) {
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

    return html`${resumeOrder.map(section => html`${orderComponentMap[section]}`)}`;
}