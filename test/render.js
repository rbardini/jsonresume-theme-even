const { test } = require('tap')
const { HtmlValidate } = require('html-validate')

const { render } = require('..')
const resume = require('resume-schema/sample.resume.json')

test('renders a resume', t => {
  t.matchSnapshot(render(resume))
  t.end()
})

test('renders valid HTML', t => {
  const htmlvalidate = new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: { 'svg-focusable': 'off' },
  })

  const {
    results: [{ messages } = {}],
  } = htmlvalidate.validateString(render(resume))

  t.is(messages, undefined)
  t.end()
})
