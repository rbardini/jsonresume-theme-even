const { test } = require('tap')

const { render } = require('..')
const resume = require('./resume.json')

test('renders a resume', t => {
  t.matchSnapshot(render(resume))
  t.end()
})
