export default function colors(meta = {}) {
  const { colors } = meta.themeOptions || {}
  return (
    colors &&
    Object.entries(colors)
      .map(([name, [light, dark = light]]) => `--color-${name}-light:${light}; --color-${name}-dark:${dark};`)
      .join(' ')
  )
}
