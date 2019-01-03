$(window).on("load", function() {
    "use strict";
    $(".loading-overlay").fadeOut(1e3)
}),
$(function() {
    "use strict";
    $(window).scroll(function() {
        var e = $(".navbar");
        $(window).scrollTop() >= e.height() ? e.addClass("scrolled") : e.removeClass("scrolled")
    }),
    $(".navbar-toggle").on("click", function() {
        $(".navbar-toggle").toggleClass("change")
    }),
    $("body").scrollspy({
        target: ".navbar",
        offset: 50
    }),
    $("#menuicon a").on("click", function(e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 1e3, function() {
                window.location.hash = t
            })
        }

        $(".navbar-toggle").click();
    }),
    $(".hero-img").backstretch(["img/background/1.jpg", "img/background/2.jpg", "img/background/3.jpg"], {
        duration: 3e3,
        fade: 750
    }),
    $('a[data-toggle="tab"]').on("shown.bs.tab", function() {
        $(".testimonials-container").backstretch("resize")
    }),
    $(".scroll-down").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#services").offset().top
        }, 1e3)
    }),
    $("html").niceScroll({
        cursorcolor: "#1750a4",
        cursorborder: "none",
        zindex: 999
    });
    var e = $("#scroll-top");
    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ? e.show() : e.hide()
    }),
    e.on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 2e3)
    })    
});

$(document).ready(function(){
    var feed = new Instafeed({
        get: "user",
        userId: "8627229753",
        limit: 6,
        resolution: "standard_resolution",
        accessToken: "8627229753.1677ed0.411e1be8305e42aeb3858eafdc54a431",
        template: '<div class="col-lg-2 col-xs-12 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    });
    feed.run();

// init owl    

});

//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });
}

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
        loop:false,
		mouseDrag:true,
		margin:0,
		nav:true,
		smartSpeed: 700,
        navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow"></span>' ],
        slideSpeed : 100,
        paginationSpeed : 100,
   
        items : 1
   
    });
   
  });


