const url = 'https://api.whatsapp.com/send?phone=5527992516837&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Landing%20Page.'

const btn = document.querySelector('#btn')

function openInNewTab(url) {
  const win = window.open(url, '_blank')
  win.focus()
}

btn.addEventListener('click', () => {
  openInNewTab(url)
})

const url2 = 'https://api.whatsapp.com/send?phone=5527992516837&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Landing%20Page.'

const btn2 = document.querySelector('#btn2')

function openInNewTab(url2) {
  const win = window.open(url2, '_blank')
  win.focus()
}

btn2.addEventListener('click', () => {
  openInNewTab(url2)
})

const url3 = 'https://api.whatsapp.com/send?phone=5527992516837&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Landing%20Page.'

const btn3 = document.querySelector('#btn3')

function openInNewTab(url3) {
  const win = window.open(url3, '_blank')
  win.focus()
}

btn3.addEventListener('click', () => {
  openInNewTab(url3)
})

const observer = new IntersectionObserver(entries => {
  console.log(entries)
  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('init-hidden-off')
    }
  })
}, {
  threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(function (element) {
  observer.observe(element)
})

AOS.init({
  duration: 1200,
});
