// v-reveal directive — fades/slides element in on scroll into view.
// Usage: v-reveal or v-reveal="120" (delay in ms)
export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

    const show = () => el.classList.add('is-in')

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { show(); io.unobserve(entry.target) }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
      io.observe(el)
    }

    requestAnimationFrame(() => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.96) show()
    })
    setTimeout(show, 1200)
  },
}
