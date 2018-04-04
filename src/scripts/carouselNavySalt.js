$('.single').slick({
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 560,
            settings: {
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});