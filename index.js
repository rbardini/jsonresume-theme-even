import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { icons } from 'feather-icons'
import Handlebars from 'handlebars'
import micromark from 'micromark'
import striptags from 'striptags'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const extname = '.hbs'
const partialsDir = path.join(__dirname, 'partials')

fs.readdirSync(partialsDir)
  .filter(filename => path.extname(filename) === extname)
  .map(filename => [
    filename,
    fs.readFileSync(path.join(partialsDir, filename), 'utf8'),
  ])
  .forEach(([filename, template]) =>
    Handlebars.registerPartial(path.basename(filename, extname), template),
  )

Handlebars.registerHelper('formatCountry', countryCode =>
  Intl.DisplayNames
    ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)
    : countryCode,
)

Handlebars.registerHelper('formatDate', dateString =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
  }),
)

Handlebars.registerHelper('formatPhone', phone =>
  phone.replace(/[^\d|+]+/g, ''),
)

Handlebars.registerHelper('formatURL', url =>
  url.replace(/^(https?:|)\/\//, '').replace(/\/$/, ''),
)

Handlebars.registerHelper('icon', (name, fallback) =>
  (icons[name.toLowerCase()] || icons[fallback.toLowerCase()]).toSvg({
    width: 16,
    height: 16,
  }),
)

Handlebars.registerHelper('join', arr =>
  Intl.ListFormat ? new Intl.ListFormat('en').format(arr) : arr.join(', '),
)

Handlebars.registerHelper('markdown', doc => micromark(doc))

Handlebars.registerHelper('stripTags', html => striptags(html))

export const pdfRenderOptions = { mediaType: 'print' }

export const render = resume => {
  const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8')
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8')

  return Handlebars.compile(template)({ css, resume })
}
