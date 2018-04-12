/**script for change OPTIONS (description) in BuyModalWindow**/

$(function () {

    var $options = $(".buy-content-info-options");

    $options.on("click", function () {
        var $detBut = $("#detBut"),
            $shipBut = $("#shipBut"),
            $descBut = $("#descBut");

        if (event.target.id == "descBut") {
            if (!$descBut.hasClass("isActiveOpt")) {
                var $activeCont = $(".isActiveCont"),
                    $activeIdCont = null ;

                console.log($activeCont);

                if ($activeCont.attr("id") == "descCont") {
                    $activeIdCont = $("#descCont");
                    console.log("desc");
                }
                if ($activeCont.attr("id") == "detCont") {
                    $activeIdCont = $("#detCont");
                    console.log("det");
                }
                if ($activeCont.attr("id") == "shipCont") {
                    $activeIdCont = $("#shipCont");
                    console.log("ship");
                }

                $(".isActiveOpt").toggleClass("isActiveOpt");
                $descBut.toggleClass("isActiveOpt");

                $activeIdCont.css("display", "none");
                $activeIdCont.toggleClass("isActiveCont");

                $("#descCont").css("display", "block");
                $("#descCont").toggleClass("isActiveCont");
            }
        }
        if (event.target.id == "detBut") {
            if (!$detBut.hasClass("isActiveOpt")) {

                var $activeCont = $(".isActiveCont"),
                    $activeIdCont = null ;
                console.log($activeCont);

                if ($activeCont.attr("id") == "descCont") {
                    $activeIdCont = $("#descCont");
                    console.log("desc");
                }
                if ($activeCont.attr("id") == "detCont") {
                    $activeIdCont = $("#detCont");
                    console.log("det");
                }
                if ($activeCont.attr("id") == "shipCont") {
                    $activeIdCont = $("#shipCont");
                    console.log("ship");
                }

                $(".isActiveOpt").toggleClass("isActiveOpt");
                $detBut.toggleClass("isActiveOpt");

                $activeIdCont.css("display", "none");
                $activeIdCont.toggleClass("isActiveCont");

                $("#detCont").css("display", "block");
                $("#detCont").toggleClass("isActiveCont");
            }
        }
        if (event.target.id == "shipBut") {
            if (!$shipBut.hasClass("isActiveOpt")) {

                var $activeCont = $(".isActiveCont"),
                    $activeIdCont = null ;
                console.log($activeCont);

                if ($activeCont.attr("id") == "descCont") {
                    $activeIdCont = $("#descCont");
                    console.log("desc");
                }
                if ($activeCont.attr("id") == "detCont") {
                    $activeIdCont = $("#detCont");
                    console.log("det");
                }
                if ($activeCont.attr("id") == "shipCont") {
                    $activeIdCont = $("#shipCont");
                    console.log("ship");
                }

                $(".isActiveOpt").toggleClass("isActiveOpt");
                $shipBut.toggleClass("isActiveOpt");

                $activeIdCont.css("display", "none");
                $activeIdCont.toggleClass("isActiveCont");

                $("#shipCont").css("display", "block");
                $("#shipCont").toggleClass("isActiveCont");
            }
        }
    });
});