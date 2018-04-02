sliderNavySalt();

function sliderNavySalt() {
    var $sliderItems = $(".navySalt-slider-nav-list");

    $sliderItems.on("click", function () {
        console.log(event.target.nodeName);

        if (event.target.nodeName === "LI" || "SPAN") {
            var elTarget = event.target;

            if (elTarget.getAttribute("class") != "navySalt-slider-nav-list-item  selectedItemNavySalt") {
                if (elTarget.textContent === "01") {
                    $(".navySalt-slider #slick-slide-control20").click()
                }
                if (elTarget.textContent === "02") {
                    $(".navySalt-slider #slick-slide-control21").click()
                }
                if (elTarget.textContent === "03") {
                    $(".navySalt-slider #slick-slide-control22").click();
                }
                if (elTarget.textContent === "04") {
                    $(".navySalt-slider #slick-slide-control23").click();
                }
                if (elTarget.textContent === "05") {
                    $(".navySalt-slider #slick-slide-control24").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-up") {
                    $(".navySalt-slider .slick-prev").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-down") {
                    $(".navySalt-slider .slick-next").click();
                }
                $(".selectedItemNavySalt").toggleClass("selectedItemNavySalt");
                var activeItem = $(".navySalt-slider .slick-active button").attr("id");
                if (activeItem === "slick-slide-control20") {
                    $("#navySalt_1").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control21") {
                    $("#navySalt_2").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control22") {
                    $("#navySalt_3").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control23") {
                    $("#navySalt_4").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control24") {
                    $("#navySalt_5").addClass("selectedItemNavySalt");
                }
            }
        }
    });
};