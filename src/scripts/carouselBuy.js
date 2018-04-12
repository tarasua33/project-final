/**script with options for slider BuyModalWindow**/

$('.buy-content-slider-single').slick({
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 560,
            settings: {
                dots: true,
                arrows: false,
                autoplaySpeed: 2000
            }
        }
    ]
});