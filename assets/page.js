const pluralize = (num, str) => `${num} ${num === 1 ? str : str.concat('s')}`

class TimeDuration extends HTMLElement {
  connectedCallback() {
    const durationAttr = +this.getAttribute('duration')
    if (!durationAttr) return this.remove()

    const diffDate = new Date(durationAttr)
    const years = diffDate.getFullYear() - 1970
    const months = diffDate.getMonth()
    const days = diffDate.getDate() - 1

    const segments = [
      years && pluralize(years, 'yr'),
      months && pluralize(months, 'mo'),
      days && !years && !months && pluralize(days, 'day'),
    ].filter(Boolean)
    if (!segments.length) return

    this.textContent = segments.join(' ')
  }
}

customElements.define('time-duration', TimeDuration)
