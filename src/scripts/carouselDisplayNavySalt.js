/**script for change pictures in slider Section NavySalt**/

sliderNavySalt();

function sliderNavySalt() {
    var $sliderItems = $(".navySalt-slider-nav-list");

    $sliderItems.on("click", function () {
        console.log(event.target.nodeName);

        if (event.target.nodeName === "LI" || "SPAN") {
            var elTarget = event.target;

            if (elTarget.getAttribute("class") != "navySalt-slider-nav-list-item  selectedItemNavySalt") {
                if (elTarget.textContent === "01") {
                    $(".navySalt-slider #slick-slide-control30").click()
                }
                if (elTarget.textContent === "02") {
                    $(".navySalt-slider #slick-slide-control31").click()
                }
                if (elTarget.textContent === "03") {
                    $(".navySalt-slider #slick-slide-control32").click();
                }
                if (elTarget.textContent === "04") {
                    $(".navySalt-slider #slick-slide-control33").click();
                }
                if (elTarget.textContent === "05") {
                    $(".navySalt-slider #slick-slide-control34").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-up") {
                    $(".navySalt-slider .slick-prev").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-down") {
                    $(".navySalt-slider .slick-next").click();
                }
                $(".selectedItemNavySalt").toggleClass("selectedItemNavySalt");
                var activeItem = $(".navySalt-slider .slick-active button").attr("id");
                if (activeItem === "slick-slide-control30") {
                    $("#navySalt_1").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control31") {
                    $("#navySalt_2").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control32") {
                    $("#navySalt_3").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control33") {
                    $("#navySalt_4").addClass("selectedItemNavySalt");
                }
                if (activeItem === "slick-slide-control34") {
                    $("#navySalt_5").addClass("selectedItemNavySalt");
                }
            }
        }
    });
};