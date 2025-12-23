import { findIconDefinition, icon, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import feather from 'feather-icons'

library.add(fas, far, fab)

/** @typedef {import('feather-icons').FeatherIconNames} FeatherIconNames */

/**
 * @param {string} name
 * @param {string} [fallback]
 * @param {'feather' | 'fontawesome'} [iconSet]
 * @returns {string | undefined}
 */
export default function Icon(name, fallback, iconSet = 'feather') {
  const key = name?.toLowerCase?.()

  if (iconSet === 'fontawesome') {
    // Try to find the icon in different FontAwesome sets
    const faIconR = findIconDefinition({ prefix: 'far', iconName: /** @type {any} */ (key) })
    const faIconS = findIconDefinition({ prefix: 'fas', iconName: /** @type {any} */ (key) })
    const faIconB = findIconDefinition({ prefix: 'fab', iconName: /** @type {any} */ (key) })
    const faIconDef = faIconS || faIconR || faIconB
    if (faIconDef) {
      const faIcon = icon(faIconDef, {
        classes: ['icon-fa', 'fa-fw'],
        attributes: { width: 16, height: 16 },
      })
      return faIcon.html[0]
    }
  }

  const featherIcon =
    (key && feather.icons[/** @type {FeatherIconNames} */ (key)]) ||
    (fallback && feather.icons[/** @type {FeatherIconNames} */ (fallback.toLowerCase())])
  return featherIcon?.toSvg({ width: 16, height: 16 })
}
