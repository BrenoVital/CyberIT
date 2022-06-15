const url = 'https://api.whatsapp.com/send?phone=5527992516837&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20Landing%20Page.'

const btn = document.querySelector('#btn')

function openInNewTab(url) {
  const win = window.open(url, '_blank')
  win.focus()
}

btn.addEventListener('click', () => {
  openInNewTab(url)
})