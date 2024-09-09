const pluralize = (num, str) => `${num} ${num === 1 ? str : str.concat('s')}`

class TimeDuration extends HTMLElement {
  connectedCallback() {
    const [from, to] = this.querySelectorAll('time')
    if (!from) return

    const startDate = new Date(from.dateTime || from.textContent)
    const endDate = new Date(to ? to.dateTime || to.textContent : Date.now())
    const diffDate = new Date(endDate - startDate)

    const years = diffDate.getFullYear() - 1970
    const months = diffDate.getMonth()
    const days = diffDate.getDate() - 1

    const segments = [
      years && pluralize(years, 'yr'),
      months && pluralize(months, 'mo'),
      days && !years && !months && pluralize(days, 'day'),
    ].filter(Boolean)
    if (!segments.length) return

    const duration = document.createElement('time')
    duration.classList.add('duration')
    duration.textContent = '· '.concat(segments.join(' '))

    this.append(' ', duration)
  }
}

customElements.define('time-duration', TimeDuration)
