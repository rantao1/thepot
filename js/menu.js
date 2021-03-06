$(document).ready(function(e) {
    let st = $(window).scrollTop();
    naviImages();

    $(".togglemenu").on("click", function(e) {
        e.preventDefault();
        if($(this).hasClass("open")) {
            closeMenu();
        } else {
            openMenu();
        }
        $(this).toggleClass("open");
    });
});

function openMenu() {
    let button = $(".togglemenu"); 
    button.css({opacity: 0});
    TweenMax.to("nav", 1, {top: 0, ease:Bounce.easeOut});
    TweenMax.staggerTo(".navi-item", 0.5, {opacity: 1, transform: "translateY(0)", ease:Power3.easeOut, delay: 0.5}, 0.2);
    TweenMax.to(".togglemenu", 0.4, {opacity:1, ease:Power3.easeOut, delay: 0.3});
    TweenMax.to(".navi-footer", 0.5, {opacity: 1, ease:Power3.easeOut, delay: 1.6});
}

function closeMenu() {
    let menu = $("nav"),
        button = $(".togglemenu"),
        li = menu.find("li"),
        winW = $(window).width();
    
    button.css({opacity: 0});
    TweenMax.staggerTo(".navi-item", 0.5, {opacity: 0, transform: "translateY(-5em)", ease:Power3.easeOut}, 0.2);
    TweenMax.to(".navi-footer", 0.5, {opacity: 0, ease:Power3.easeOut});
    TweenMax.to("nav", 1, {top: "-100%", ease:Power3.easeOut, delay: 1});
    TweenMax.to(".togglemenu", 0.4, {opacity:1, ease:Power3.easeOut, delay: 0.3});
}

function naviImages() {
    let image = $(".item-img");
    $(".nav-pot").mouseover(function() {
        image.fadeOut(300, "swing", function() {
            image.attr("src", "img/navi-hotpot.jpg");
            image.fadeIn(300, "swing");
        });
    });
    $(".nav-shabu").mouseover(function() {
        image.fadeOut(300, "swing", function() {
            image.attr("src", "img/navi-shabu.jpg");
            image.fadeIn(300, "swing");
        });
    });
    $(".nav-budae").mouseover(function() {
        image.fadeOut(300, "swing", function() {
            image.attr("src", "img/navi-budae.jpg");
            image.fadeIn(300, "swing");
        });
    });
    $(".nav-pot, .nav-shabu, .nav-budae").mouseout(function() {
        image.fadeOut(300, "swing", function() {
            image.attr("src", "#");
            image.fadeIn(300, "swing");
        });
    });
}
