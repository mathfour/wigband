$(function () {

    $(window).on("scroll", function () {

        var xpos = $(window).scrollTop();

        if (xpos > 200) {
            movement();

        } else {
            init();
        }

        if (xpos > 630) {

            $("#content-2").removeClass("slide-in-left-1").addClass("slide-in-left-2");
        } else {
            $("#content-2").removeClass("slide-in-left-2").addClass("slide-in-left-1");
        }

        if (xpos > 1090) {

            $("#content-3").removeClass("slide-in-right-1").addClass("slide-in-right-2");
        } else {
            $("#content-3").removeClass("slide-in-right-2").addClass("slide-in-right-1");
        }


            function movement () {
                $("#content-1").removeClass("slide-in-right-1").addClass("slide-in-right-2");
                $("#big-picture").addClass("tint");
                $("nav").removeClass("nav-color-1").addClass("nav-color-2");
                $("#title").css("transform", "translateX(13em)");
                $("#list").css("transform", "translateX(-13em)");
                $("#title").removeClass("w").addClass("b");
                $("a").removeClass("w").addClass("b");
                $("#logo").attr("src", "../public/images/WigBrandLogoFavicon.png");
                $("#logo").addClass("logo-2");
            }


        function init () {
            $("#content-1").removeClass("slide-in-right-2").addClass("slide-in-right-1");
            $("nav").removeClass("nav-color-2").addClass("nav-color-1");
            $("#title").css("transform", "translateX(0em)");
            $("#list").css("transform", "translateX(0em)");
            $("#title").removeClass("b").addClass("w");
            $("a").removeClass("b").addClass("w");
            $("#logo").attr("src", "../public/images/WigBrand_500x385.png");
            $("#logo").removeClass("logo-2");
        }
    });
})
