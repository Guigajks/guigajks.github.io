(() => {
    const navButton = document.getElementById('navButton')
    const nav = navButton.parentElement
    const navList = nav.querySelector('ul')

    navButton.addEventListener('click', () => {
        if (navList.getAttribute('open') === 'true') {
            navList.setAttribute('open', 'false')
            nav.setAttribute('open', 'false')
        } else {
            navList.setAttribute('open', 'true')
            nav.setAttribute('open', 'true')
        }
    })
})()

function copyToClipboard() {
    const copyText = document.getElementById("contact-email");
  
    navigator.clipboard.writeText(copyText.textContent.trim());
  
    alert("E-mail copiado");
  }