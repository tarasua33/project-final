/**script for change pictures in slider Drifter section**/

sliderDrifter();

function sliderDrifter() {
    var $sliderItems = $(".drifter-slider-nav-list");

    $sliderItems.on("click", function () {

        if (event.target.nodeName === "LI" || "SPAN") {
            var elTarget = event.target;

            if (elTarget.getAttribute("class") != "drifter-slider-nav-list-item  selectedItemDrifter") {
                if (elTarget.textContent === "01") {
                    $(".drifter-slider #slick-slide-control10").click()
                }
                if (elTarget.textContent === "02") {
                    $(".drifter-slider #slick-slide-control11").click()
                }
                if (elTarget.textContent === "03") {
                    $(".drifter-slider #slick-slide-control12").click();
                }
                if (elTarget.textContent === "04") {
                    $(".drifter-slider #slick-slide-control13").click();
                }
                if (elTarget.textContent === "05") {
                    $(".drifter-slider #slick-slide-control14").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-left") {
                    $(".drifter-slider .slick-prev").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-right") {
                    $(".drifter-slider .slick-next").click();
                }
                $(".selectedItemDrifter").toggleClass("selectedItemDrifter");
                var activeItem = $(".drifter-slider .slick-active button").attr("id");
                if (activeItem === "slick-slide-control10") {
                    $("#drifter_1").addClass("selectedItemDrifter");
                }
                if (activeItem === "slick-slide-control11") {
                    $("#drifter_2").addClass("selectedItemDrifter");
                }
                if (activeItem === "slick-slide-control12") {
                    $("#drifter_3").addClass("selectedItemDrifter");
                }
                if (activeItem === "slick-slide-control13") {
                    $("#drifter_4").addClass("selectedItemDrifter");
                }
                if (activeItem === "slick-slide-control14") {
                    $("#drifter_5").addClass("selectedItemDrifter");
                }
            }
        }
    });
};