import { HtmlValidate } from 'html-validate'
import { expect, it } from 'vitest'

import sampleResume from '@jsonresume/schema/sample.resume.json' with { type: 'json' }
import { render } from '../index.js'

const meta = {
  ...sampleResume.meta,
  themeOptions: {
    colors: {
      background: ['lightgray', 'darkgray'],
    },
  },
}

const resume = {
  ...sampleResume,
  meta,
  basics: {
    ...sampleResume.basics,
    image: 'image.jpg',
  },
}

it('renders a resume', () => {
  expect(render(resume)).toMatchSnapshot()
})

it('renders a resume with additional section metadata', () => {
  resume.meta = {
    ...meta,
    sectionLabels: { work: 'Jobs' },
    sections: [
      'work',
      'volunteer',
      'education',
      'skills',
      'projects',
      'awards',
      'certificates',
      'publications',
      'languages',
      'interests',
      'references',
    ],
  }
  expect(render(resume)).toMatchSnapshot()
})

it('renders valid HTML', async () => {
  const htmlvalidate = new HtmlValidate({
    extends: ['html-validate:recommended', 'html-validate:prettier'],
    rules: {
      'no-inline-style': 'off',
      'no-trailing-whitespace': 'off',
      'tel-non-breaking': 'off',
    },
  })

  const {
    results: [{ messages } = {}],
  } = await htmlvalidate.validateString(render(resume))

  expect(messages).toBeUndefined()
})
