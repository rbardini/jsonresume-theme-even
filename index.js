import Resume from './resume.js'
import css from './style.css?inline'

export const pdfRenderOptions = { mediaType: 'print' }

export const render = resume => {
  return Resume(resume, css)
}
