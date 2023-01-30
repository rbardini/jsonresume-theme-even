import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import Resume from './resume.js'

const dirname = typeof __dirname === 'string'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url))

export const pdfRenderOptions = { mediaType: 'print' }

export const render = resume => {
  const css = fs.readFileSync(path.resolve(dirname, 'style.css'), 'utf-8')

  return Resume(resume, css)
}
