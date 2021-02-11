$(document).ready(() => {

    /* ouvre le menu */
    $("#menuButton").click(function (){
        // $(this).preventDefault();
        $(this).hide();
        $("#menus").fadeIn("slow");
    })

    /* ferme le menu */
    $("#closeMenus").click(function (){
        $("#menus").fadeOut("fast", function (){
            $("#menuButton").show("fast");
        });
    })
})
