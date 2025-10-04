const pluralize = (num, str) => `${num} ${num === 1 ? str : str.concat('s')}`

class TimeDuration extends HTMLElement {
  connectedCallback() {
    const dates = this.getAttribute('dates')
    if (!dates) return this.remove()

    const duration = dates.split('|').reduce((acc, _date, i, dates) => {
      if (i % 2) return acc
      const [startDate, endDate] = dates.slice(i)
      return acc + (startDate ? +new Date(endDate || Date.now()) - +new Date(startDate) : 0)
    }, 0)

    const diffDate = new Date(duration)
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
