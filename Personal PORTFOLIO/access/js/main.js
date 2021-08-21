// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (nav && toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu("nav__toogle", "nav-menu")
    // acctive and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    document.getElementById('nav-menu').classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))