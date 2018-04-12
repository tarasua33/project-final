/**script with options for sliders Vojager Drifter Sections**/

$('.center').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 660,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 560,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});