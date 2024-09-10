// @ts-expect-error `?raw` query
import js from './assets/page.js?raw'
// @ts-expect-error `?inline` query
import css from './assets/page.css?inline'
import Resume from './components/resume.js'

export const pdfRenderOptions = {
  mediaType: 'print',
  printBackground: true,
}

/**
 * @param {import('./schema.d.ts').ResumeSchema} resume
 * @returns {string}
 */
export const render = resume => {
  return Resume(resume, { css, js })
}
