/**script for change number GOODS in BuyModalWindow**/

$(function () {
    var $min= $(".buy-content-info-quality-min"),
        $number = $(".buy-content-info-quality-number"),
        $plus = $(".buy-content-info-quality-plus");

    $(".buy-content-info-quality").on("click", function () {
        if (event.target.getAttribute("class") == "glyphicon glyphicon-minus buy-content-info-quality-min") {
            $number.text(+$number.text()-1);
            console.log("ckick min");
            if (+$number.text() < 0) {
                $number.text(0);
            }
        }
        if (event.target.getAttribute("class") == "glyphicon glyphicon-plus buy-content-info-quality-plus") {
            $number.text(+$number.text()+1);
            console.log("ckick plus");
        }
    })
});