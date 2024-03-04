console.log('Hello');

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function toggleMenu() {
    const menuBtnStyle = window.getComputedStyle(menuBtn);
    const bgImgVal = menuBtnStyle.getPropertyValue('background-image');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuBtn.style.backgroundImage = bgImgVal.replace('close', 'hamburger');
    } else {
        menu.style.display = 'block';
        menuBtn.style.backgroundImage = bgImgVal.replace('hamburger', 'close');
    }
}

menuBtn.addEventListener('click', toggleMenu);

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