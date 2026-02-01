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

// Table of Contents active state tracking
;(() => {
  const toc = document.querySelector('.table-of-contents')
  if (!toc) return

  const links = toc.querySelectorAll('a[data-toc-target]')
  if (!links.length) return

  // Track all sections
  const sections = Array.from(links)
    .map(link => {
      const target = link.getAttribute('data-toc-target')
      if (target === 'top') return { element: document.body, link, id: target }
      const section = document.getElementById(target)
      if (!section) return null
      // Use the h3 header as the scroll target (sections have display:contents)
      const header = section.querySelector('h3')
      return { element: section, scrollTarget: header || section, link, id: target }
    })
    .filter(Boolean)

  if (!sections.length) return

  // Update active link
  const setActiveLink = target => {
    links.forEach(link => link.classList.remove('active'))
    const activeLink = sections.find(s => s.element === target)?.link
    if (activeLink) activeLink.classList.add('active')
  }

  // Intersection Observer to track visible sections
  // Since sections have display:contents, we observe the h3 headers or body
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Consider section "active" when it's in the top 30% of viewport
    threshold: 0,
  }

  let activeSection = null

  const observer = new IntersectionObserver(entries => {
    // Find the topmost intersecting section
    const intersecting = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

    if (intersecting.length > 0) {
      // Get the section element from the observed target
      const target = intersecting[0].target
      const sectionData = sections.find(s => s.scrollTarget === target || s.element === target)
      if (sectionData) {
        activeSection = sectionData.element
        setActiveLink(activeSection)
      }
    }
  }, observerOptions)

  // Observe scroll targets (h3 headers or body for "top")
  sections.forEach(({ element, scrollTarget }) => {
    observer.observe(scrollTarget || element)
  })

  // Handle smooth scrolling
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = link.getAttribute('data-toc-target')
      const sectionData = sections.find(s => s.id === target)
      if (sectionData) {
        const scrollTarget = sectionData.scrollTarget || sectionData.element
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update active state immediately
        setActiveLink(sectionData.element)
      }
    })
  })

  // Set initial active state
  setActiveLink(sections[0].element)
})()
