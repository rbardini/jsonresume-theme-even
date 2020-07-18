const { test } = require('tap')
const { HtmlValidate } = require('html-validate')

const { render } = require('..')
const resume = require('../resume.json')

test('renders a resume', t => {
  t.matchSnapshot(render(resume))
  t.end()
})

test('renders valid HTML', t => {
  const htmlvalidate = new HtmlValidate({
    rules: {
      'void-style': ['error', { style: 'selfclosing' }],
    },
  })

  const {
    results: [{ messages } = {}],
  } = htmlvalidate.validateString(render(resume))

  t.is(messages, undefined)
  t.end()
})
