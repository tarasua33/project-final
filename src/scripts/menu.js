/**script for OPEN and CLOSE MENU**/

openMenu();

function openMenu() {
    $(".headerBlock-menu-menuToggle").on("click", function () {
        $(".headerBlock-menu-list").slideToggle(300, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }

        });
    });
}