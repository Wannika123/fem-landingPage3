console.log('Hello');

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuBtn.style.backgroundImage = 'url(../images/icon-hamburger.svg)'
    } else {
        menu.style.display = 'block';
        menuBtn.style.backgroundImage = 'url(../images/icon-close.svg)'
    }
})

const socialLinks = document.getElementsByClassName('social-link');

for (let i = 0; i < socialLinks.length; i++) {
    const path = socialLinks[i].querySelector('path');
    socialLinks[i].addEventListener('mouseover', () => {
        path.setAttribute('fill', 'hsl(136, 65%, 51%)');
        socialLinks[i].style.cursor = 'pointer';
    })
    socialLinks[i].addEventListener('mouseleave', () => {
        path.setAttribute('fill', '#fff');
    })
}