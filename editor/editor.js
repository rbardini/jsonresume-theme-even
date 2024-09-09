import { indentWithTab } from '@codemirror/commands'
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView, keymap } from '@codemirror/view'
import resume from '@jsonresume/schema/sample.resume.json' with { type: 'json' }
import { basicSetup } from 'codemirror'
import debounce from 'debounce'

import { render } from '../index.js'
import './editor.css'

const preview = document.querySelector('iframe')
const printButton = document.querySelector('button[name=print]')

printButton.addEventListener('click', () => preview.contentWindow.print())

const renderPreview = debounce(resume => (preview.srcdoc = render(resume)), 200)
renderPreview(resume)

new EditorView({
  doc: JSON.stringify(resume, null, '  '),
  extensions: [
    basicSetup,
    oneDark,
    EditorView.lineWrapping,
    EditorView.updateListener.of(
      ({ docChanged, state }) => docChanged && renderPreview(JSON.parse(state.doc.toString())),
    ),
    keymap.of([indentWithTab]),
    json(),
  ],
  parent: document.body,
})
