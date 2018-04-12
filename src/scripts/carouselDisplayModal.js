/**script for change pictures in slider Modal Window**/

sliderModal();

function sliderModal() {
    var $sliderItems = $(".buy-content-slider-nav-list");

    $sliderItems.on("click", function () {

        if (event.target.nodeName === "LI"  || "SPAN") {
            var elTarget = event.target;

            if (elTarget.getAttribute("class") != "buy-content-slider-nav-list-item  selectedItemModal") {
                if (elTarget.textContent === "01") {
                    $(".buy-content-slider #slick-slide-control20").click()
                }
                if (elTarget.textContent === "02") {
                    $(".buy-content-slider #slick-slide-control21").click()
                }
                if (elTarget.textContent === "03") {
                    $(".buy-content-slider #slick-slide-control22").click();
                }
                if (elTarget.textContent === "04") {
                    $(".buy-content-slider #slick-slide-control23").click();
                }
                if (elTarget.textContent === "05") {
                    $(".buy-content-slider #slick-slide-control24").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-left") {
                    $(".buy-content-slider .slick-prev").click();
                }
                if (elTarget.getAttribute("class") === "glyphicon glyphicon-menu-right") {
                    $(".buy-content-slider .slick-next").click();
                }
                $(".selectedItemModal").toggleClass("selectedItemModal");
                var activeItem = $(".buy-content-slider .slick-active button").attr("id");
                if (activeItem === "slick-slide-control20") {
                    $("#buy-content_1").addClass("selectedItemModal");
                }
                if (activeItem === "slick-slide-control21") {
                    $("#buy-content_2").addClass("selectedItemModal");
                }
                if (activeItem === "slick-slide-control22") {
                    $("#buy-content_3").addClass("selectedItemModal");
                }
                if (activeItem === "slick-slide-control23") {
                    $("#buy-content_4").addClass("selectedItemModal");
                }
                if (activeItem === "slick-slide-control24") {
                    $("#buy-content_5").addClass("selectedItemModal");
                }
            }
        }
    });
};