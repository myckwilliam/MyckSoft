const menu = document.querySelector('.menu');

const open = document.querySelector('.icon-menu');

const close = document.querySelector('.icon-close');

const menuItems = document.querySelectorAll('.menu-item');

const header = document.querySelector('.header');

const up = document.querySelector('.icon-arrow-up');

const navHeight = header.offsetHeight;

window.addEventListener('scroll', element => {
    window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll');
    window.scrollY >= navHeight ? up.classList.add('scroll') : up.classList.remove('scroll');
    activateMenuAtCurrentSection();
})

const openMenu = () => {
    menu.classList.add('show');
}

const closeMenu = () => {
    menu.classList.remove('show');
}

open.onclick = openMenu;
close.onclick = closeMenu;

 for (element of menuItems) {
    element.onclick = closeMenu;
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
         
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
        spaceBetween: 16,
        width: 1100,
        freeMode: true,
      }
    }
  });


  // ScrollReveal: Mostrar elementos quando der scroll na página

  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  })

  scrollReveal.reveal(`
    #home .texto, #home .images-home,
    #about .texto, #about .images-about,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact header, #contact .contacts,
    #footer a, #footer .text-info, #footer .media
    `, { interval: 100 }
  )

const sections = document.querySelectorAll('main section[id]');

const activateMenuAtCurrentSection = () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    (checkpointStart && checkpointEnd) 
    ? document.querySelector('nav ul li a[href*=' + sectionId +']').classList.add('active')
    : document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active')
  }
}


  
