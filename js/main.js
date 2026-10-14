const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

if (menu && navlist) {
    menu.addEventListener('click', () => {
        const isOpen = navlist.classList.toggle('open')
        menu.classList.toggle('bx-x', isOpen)
        menu.setAttribute('aria-expanded', String(isOpen))
        menu.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
    })

    navlist.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            navlist.classList.remove('open')
            menu.classList.remove('bx-x')
            menu.setAttribute('aria-expanded', 'false')
            menu.setAttribute('aria-label', 'Abrir menú')
        }
    })
}

if (typeof ScrollReveal === 'function') {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 1200,
        delay: 200,
        reset: true
    })

    sr.reveal('.hero-text', {delay: 200, origin: 'top'})
    sr.reveal('.hero-img', {delay: 450, origin: 'top'})
    sr.reveal('.icons', {delay: 500, origin: 'left'})
    sr.reveal('.scroll-down', {delay: 450, origin: 'right'})
    sr.reveal('.proyectos-personales h2', {origin: 'top'})
    sr.reveal('.proyecto-card', {origin: 'bottom', interval: 160})
}