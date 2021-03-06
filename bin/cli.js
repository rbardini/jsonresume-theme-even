#!/usr/bin/env node
const fs = require('fs')
const { render } = require('..')

const resume = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf-8'))
const html = render(resume)

process.stdout.write(html)
