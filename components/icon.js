import { icons } from 'feather-icons'

export default function Icon(name, fallback) {
  const ico = icons[name.toLowerCase()] || icons[fallback.toLowerCase()]
  return ico.toSvg({ width: 16, height: 16 })
}
