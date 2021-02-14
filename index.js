const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const micromark = require('micromark')
const striptags = require('striptags')

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

Handlebars.registerHelper('formatDate', dateString =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
  }),
)

Handlebars.registerHelper('formatURL', url =>
  url.replace(/^(https?:|)\/\//, '').replace(/\/$/, ''),
)

Handlebars.registerHelper('join', (arr, separator) =>
  arr.join(typeof separator === 'string' ? separator : ', '),
)

Handlebars.registerHelper('markdown', doc => micromark(doc))

Handlebars.registerHelper('stripTags', html => striptags(html))

exports.pdfRenderOptions = { mediaType: 'print' }

exports.render = resume => {
  const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8')
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8')

  return Handlebars.compile(template)({ css, resume })
}
