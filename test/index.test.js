import { HtmlValidate } from 'html-validate'
import { expect, it } from 'vitest'

import { render } from '../index.js'
import resume from 'resume-schema/sample.resume.json' assert { type: 'json' }

// Overwrite empty sample resume values
resume.basics.image = 'image.jpg'

it('renders a resume', () => {
  expect(render(resume)).toMatchSnapshot()
})

it('renders valid HTML', async () => {
  const htmlvalidate = new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: {
      'no-trailing-whitespace': 'off',
      'tel-non-breaking': 'off',
    },
  })

  const {
    results: [{ messages } = {}],
  } = await htmlvalidate.validateString(render(resume))

  expect(messages).toBeUndefined()
})
