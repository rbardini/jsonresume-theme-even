# jsonresume-theme-even

[![npm package version](https://img.shields.io/npm/v/jsonresume-theme-even.svg)](https://www.npmjs.com/package/jsonresume-theme-even)
[![Build status](https://img.shields.io/github/actions/workflow/status/rbardini/jsonresume-theme-even/main.yml)](https://github.com/rbardini/jsonresume-theme-even/actions)
[![Deploy status](https://img.shields.io/netlify/7c0cb4f0-e270-4085-8f75-a8850cf45b2a?label=deploy)](https://app.netlify.com/sites/jsonresume-theme-even/deploys)
[![Code coverage](https://img.shields.io/codecov/c/github/rbardini/jsonresume-theme-even.svg)](https://codecov.io/gh/rbardini/jsonresume-theme-even)
[![Dependencies status](https://img.shields.io/librariesio/release/npm/jsonresume-theme-even)](https://libraries.io/npm/jsonresume-theme-even)

A flat [JSON Resume](https://jsonresume.org/) theme, compatible with the latest [resume schema](https://github.com/jsonresume/resume-schema).
Inspired by [jsonresume-theme-flat](https://github.com/erming/jsonresume-theme-flat).

- 💄 Markdown support
- 📐 CSS grid layout
- 🌗 Light and dark modes
- 🧩 Standalone CLI
- 📦 ESM and CommonJS builds

[View demo →](https://jsonresume-theme-even.rbrd.in)

## Installation

```console
npm install jsonresume-theme-even
```

## Usage

### With resume-cli

[resume-cli](https://github.com/jsonresume/resume-cli) comes with _Even_ and uses it by default, so you don't even (pun intended) need to install the theme yourself:

```console
npm install resume-cli
npx resume export resume.html
```

### With Resumed

[Resumed](https://github.com/rbardini/resumed) requires you to install the theme, since it does not come with any by default. It will then automatically load and use _Even_ when rendering a resume:

```console
npm install resumed jsonresume-theme-even
npx resumed render
```

### Standalone usage

_Even_ comes with a barebones CLI that reads resumes from `stdin` and outputs HTML to `stdout`. This allows usage without any resume builder tools:

```console
npx jsonresume-theme-even < resume.json > resume.html
```
