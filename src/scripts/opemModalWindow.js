/**Script for OPEN and CLOSE BuyModalWindow**/

$(function () {
    var $items = $(".openModal"),
        $myModal = $(".buyWrapper"),
        $closeWindow = $(".closeWindow");

    $items.on("click", function () {
        event.preventDefault();
        $myModal.css("display", "block");
    });
    $closeWindow.on("click", function () {
        $myModal.css("display", "none");
    })
});