sliderSelf();

function sliderSelf() {
    var $slidePic = $(".navySalt-slider-images-pic"),
        $activeItem = $(".selectedItem");

    $(".navySalt-slider-list").on("click", function () {

        if (event.target.nodeName === "LI") {
            var elTarget = event.target;
            if (elTarget.getAttribute("class") != "navySalt-slider-list-item selectedItem") {
                if (elTarget.textContent === "01") {
                    $slidePic.attr("src", "/img/home-header-slide.jpg");
                }
                if (elTarget.textContent === "02") {
                    $slidePic.attr("src", "/img/home-header-slide1.jpg");
                }
                if (elTarget.textContent === "03") {
                    $slidePic.attr("src", "/img/home-header-slide2.jpg");
                }
                if (elTarget.textContent === "04") {
                    $slidePic.attr("src", "/img/home-header-slide3.jpg");
                }
                if (elTarget.textContent === "05") {
                    $slidePic.attr("src", "/img/home-header-slide4.jpg");
                }
                elTarget.setAttribute("class", "navySalt-slider-list-item selectedItem");
                $activeItem.toggleClass("selectedItem");
                $activeItem = $(".selectedItem");
            }
        }
    });
}