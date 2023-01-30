import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Icon from './icon.js'
import Link from './link.js'

const formatCountry = countryCode => Intl.DisplayNames
  ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)
  : countryCode

export default function Header(basics = {}) {
  const { email, image, label, location, name, phone, profiles = [], summary, url } = basics

  return html`
    <header class="masthead">
      ${image && html`<img src="${image}" alt="">`}
      <div>
        ${name && html`<h1>${name}</h1>`}
        ${label && html`<h2>${label}</h2>`}
      </div>
      ${summary && html`<article>${markdown(summary)}</article>`}
      <ul class="icon-list">
        ${location?.city && html`
          <li>
            ${Icon('map-pin')}
            ${location.city}${location.countryCode && html`, ${formatCountry(location.countryCode)}`}
          </li>
        `}
        ${email && html`
          <li>
            ${Icon('mail')}
            <a href="mailto:${email}">${email}</a>
          </li>
        `}
        ${phone && html`
          <li>
            ${Icon('phone')}
            <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>
          </li>
        `}
        ${url && html`
          <li>
            ${Icon('link')}
            ${Link(url)}
          </li>
        `}
        ${profiles.map(({ network, url, username }) => html`
          <li>
            ${Icon(network, 'user')}
            ${Link(url, username)}
            ${network && html`<span class="network">(${network})</span>`}
          </li>
        `)}
      </ul>
    </header>
  `
}
