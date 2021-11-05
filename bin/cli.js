#!/usr/bin/env node
import fs from 'fs'
import { render } from '../dist/index.modern.js'

const resume = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf-8'))
const html = render(resume)

process.stdout.write(html)
