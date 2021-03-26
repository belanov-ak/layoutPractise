//webpchecking function
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

new Swiper('.section-hero-image', {
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true,
    },
})

new Swiper('.slider-blog-container', {
    pagination: {
        el: '.slider-blog .dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-blog .btn-blog--next',
        prevEl: '.slider-blog .btn-blog--prev',
    },
})

new Swiper('.slider-quotes-container', {
    slidesPerView: 'auto',
    // spaceBetween: 35,
    pagination: {
        el: '.section-quotes .dots',
        clickable: true,
    }
})

const header = document.querySelector('.section-header')
const mainNav = document.getElementById('main-navigation')
const navWrap = document.querySelector('.main-navigation__inner-wrap')

document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item')
            .classList.toggle('faq-accordion__item--active')
    }
})

document.querySelector('.btn-burger').addEventListener('click', () => {
    header.classList.toggle('section-header--active-nav')
    

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll()
    } else {
        showScroll()
    }
})

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`
    document.body.style.paddingRight = scrollWidth
    document.body.style.overflow = 'hidden'

    mainNav.style.paddingRight = scrollWidth
}

const showScroll = () => {
    document.body.style.paddingRight = ''
    document.body.style.overflow = 'visible'

    mainNav.style.paddingRight = ''
}

const resetNav = () => {
    showScroll();
    header.classList.remove('section-header--active-nav')
}

window.addEventListener('resize', resetNav)

const getScrollbarWidth = () => {
    const outer = document.createElement('div')

    outer.style.position = 'absolute'
    outer.style.top = '-9999px'
    outer.style.width = '50px'
    outer.style.height = '50px'
    outer.style.overflow = 'scroll'
    outer.style.visibility = 'hidden'

    document.body.appendChild(outer)
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth
    document.body.removeChild(outer)

    return scrollBarWidth
}

