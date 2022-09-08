import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { icons } from 'feather-icons'
import Handlebars from 'handlebars'
import micromark from 'micromark'
import striptags from 'striptags'

const dirname =
  typeof __dirname === 'string'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))
const extname = '.hbs'
const partialsDir = path.join(dirname, 'partials')

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
    timeZone: 'UTC',
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
  const template = fs.readFileSync(path.resolve(dirname, 'resume.hbs'), 'utf-8')
  const css = fs.readFileSync(path.resolve(dirname, 'style.css'), 'utf-8')

  return Handlebars.compile(template)({ css, resume })
}
