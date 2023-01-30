import micromark from 'micromark'
import striptags from 'striptags'

export default function markdown(doc, stripTags = false) {
  const html = micromark(doc)
  return stripTags ? striptags(html) : html
}
