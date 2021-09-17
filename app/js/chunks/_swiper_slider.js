// Swiper
const indexSwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    parallax: true,

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // autoplay
    // autoplay: {
    //     delay: 5000,
    // },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
        },
    },
});

const catalogueSwiper = new Swiper('.catalog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay
    /*autoplay: {
        delay: 45000,
    },*/

    // pagination
    /*pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },*/
});
