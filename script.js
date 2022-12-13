function openEmailClient() {
    const form = document.querySelector('[name="contactInfo"]')
    const formData = new FormData(form);
    const nome = encodeURIComponent(formData.get('nome'))
    const email = formData.get('email')
    const assunto = encodeURIComponent(formData.get('assunto'))
    const descricao = encodeURIComponent(formData.get('descricao'))

    const anchor = document.createElement('a');

    const subject = `subject=${assunto}`
    const body = `body=${nome}${encodeURIComponent('\n')}${email}${encodeURIComponent('\n\n')}${descricao}`
    const mailto = `mailto:luiz.gchagas@outlook.com?${[subject, body].join('&')}`

    anchor.setAttribute('href', mailto)

    anchor.click()
}

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