scrollAnchors = [
  document.querySelector('.directions'),
  document.querySelector('.compare'),
  document.querySelector('.directions'),
  document.querySelector('.about'),
]
scrollSelectors = document.querySelectorAll('.header-nav__item')
scrollSelectors.forEach((selector) => {
  selector.addEventListener('click', (e) => {
    e.preventDefault()
    scrollAnchors.forEach((anchor) => {
      if (selector.getAttribute('href') === anchor.dataset.scroll) {
        anchor.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
    })
  })
})
