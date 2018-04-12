/**script for change pictures in slider Section Vojager**/

sliderVojager();

function sliderVojager() {
        var $sliderItems = $(".voyager-slider-nav-list");

        $sliderItems.on("click", function () {

            if (event.target.nodeName === "LI"  || "SPAN") {
                var elTarget = event.target;

                if (elTarget.getAttribute("class") != "voyager-slider-nav-list-item  selectedItemVoyager") {
                    if (elTarget.textContent === "01") {
                        $(".voyager-slider #slick-slide-control00").click()
                    }
                    if (elTarget.textContent === "02") {
                        $(".voyager-slider #slick-slide-control01").click()
                    }
                    if (elTarget.textContent === "03") {
                        $(".voyager-slider #slick-slide-control02").click();
                    }
                    if (elTarget.textContent === "04") {
                        $(".voyager-slider #slick-slide-control03").click();
                    }
                    if (elTarget.textContent === "05") {
                        $(".voyager-slider #slick-slide-control04").click();
                    }
                    if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-left") {
                        $(".voyager-slider .slick-prev").click();
                    }
                    if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-right") {
                        $(".voyager-slider .slick-next").click();
                    }
                    $(".selectedItemVoyager").toggleClass("selectedItemVoyager");
                    var activeItem = $(".voyager-slider .slick-active button").attr("id");
                    if (activeItem === "slick-slide-control00") {
                        $("#voyager_1").addClass("selectedItemVoyager");
                    }
                    if (activeItem === "slick-slide-control01") {
                        $("#voyager_2").addClass("selectedItemVoyager");
                    }
                    if (activeItem === "slick-slide-control02") {
                        $("#voyager_3").addClass("selectedItemVoyager");
                    }
                    if (activeItem === "slick-slide-control03") {
                        $("#voyager_4").addClass("selectedItemVoyager");
                    }
                    if (activeItem === "slick-slide-control04") {
                        $("#voyager_5").addClass("selectedItemVoyager");
                    }
                }
            }
        });
};