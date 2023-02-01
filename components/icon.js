import feather from 'feather-icons'

export default function Icon(name, fallback) {
  const icon =
    feather.icons[name.toLowerCase()] || feather.icons[fallback.toLowerCase()]
  return icon.toSvg({ width: 16, height: 16 })
}
