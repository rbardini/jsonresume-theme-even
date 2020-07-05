const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('formatDate', dateString =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    year: 'numeric',
  }),
)

Handlebars.registerHelper('join', (arr, separator) =>
  arr.join(typeof separator === 'string' ? separator : ', '),
)

exports.render = resume => {
  const template = fs.readFileSync(`${__dirname}/resume.hbs`, 'utf-8')
  const css = fs.readFileSync(`${__dirname}/style.css`, 'utf-8')

  return Handlebars.compile(template)({ css, resume })
}
