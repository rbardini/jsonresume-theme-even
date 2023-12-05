import Header from './components/header.js'
import Meta from './components/meta.js'
import Sections from './components/sections.js'
import colors from './utils/colors.js'
import html from './utils/html.js'

export default function Resume(resume, css) {
  return html`<!DOCTYPE html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8">
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap">
        <style>${css}</style>
      </head>
      <body>
        ${Header(resume.basics)} ${Sections(resume)}
      </body>
    </html>`
}
