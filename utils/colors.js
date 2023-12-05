/** @typedef {Record<string, [light: string, dark?: string]>} ThemeColorOptions */
/** @typedef {{ colors?: ThemeColorOptions }} ThemeOptions */

/**
 * @param {import('../schema.d.ts').ResumeSchema['meta'] & { themeOptions?: ThemeOptions }} meta
 * @returns {string | undefined}
 */
export default function colors(meta = {}) {
  const colors = meta.themeOptions?.colors
  return (
    colors &&
    Object.entries(colors)
      .map(([name, [light, dark = light]]) => `--color-${name}-light:${light}; --color-${name}-dark:${dark};`)
      .join(' ')
  )
}
