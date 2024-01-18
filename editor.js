import { debounce } from 'debounce'
import resume from './public/resume.json' assert { type: 'json' }

import './editor.css'
import { render } from './index.js'

const preview = document.querySelector('iframe')
const printButton = document.querySelector('button[name=print]')

printButton.addEventListener('click', () => preview.contentWindow.print())

const renderPreview = debounce(resume => (preview.srcdoc = render(resume)), 200)
renderPreview(resume)

// new EditorView({
//   doc: JSON.stringify(resume, null, '  '),
//   extensions: [
//     basicSetup,
//     oneDark,
//     EditorView.lineWrapping,
//     EditorView.updateListener.of(
//       ({ docChanged, state }) => docChanged && renderPreview(JSON.parse(state.doc.toString())),
//     ),
//     keymap.of([indentWithTab]),
//     json(),
//   ],
//   parent: document.body,
// })
