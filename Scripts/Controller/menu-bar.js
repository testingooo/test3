export function menuBar() {
  document.querySelector('.menu-bar').addEventListener('click', () => {
    // document.querySelector('.slide-bar').classList.remove('hide')
    document.querySelector('.slide-bar').classList.toggle('shadow')
    document.querySelectorAll('.slide-bar .mobile-account, .slide-bar .mobile-saved, .slide-bar .mobile-order, .slide-bar .mobile-inbox').forEach(elem => {
      if (!(elem.classList.contains('return'))) {
        elem.classList.add('return')
      } else {
        elem.classList.toggle('return')
      }
    })
  })
  
  window.addEventListener('scroll', () => {
    // document.querySelector('.slide-bar').classList.add('hide')
    document.querySelector('.slide-bar').classList.remove('shadow')
    document.querySelectorAll('.slide-bar .mobile-account, .slide-bar .mobile-saved, .slide-bar .mobile-order, .slide-bar .mobile-inbox').forEach(elem => {
      elem.classList.remove('return')
    })
  })
  
  document.querySelectorAll('.account-page-container, .saved-items-container, .related-product').forEach(elem => {
    elem.addEventListener('click', () => {
      document.querySelector('.slide-bar').classList.remove('shadow')
      document.querySelectorAll('.slide-bar .mobile-account, .slide-bar .mobile-saved, .slide-bar .mobile-order, .slide-bar .mobile-inbox').forEach(elem => {
        elem.classList.remove('return')
      })
    })
  })
}