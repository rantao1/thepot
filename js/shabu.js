$(window).scroll(function(){
    let winW = $(window).width(),
        winH = $(window).height(),
        st = $(window).scrollTop(),
        ratio = winW / winH;
    
    introAnimation(winH, st);
    historyAnimation(st);
    dashiAnimation(winH, st);
    ingredientAnimation(st);
    cookAnimation(winH, st);
    sauceAnimation(st);
    enjoyAnimation(st);

    firstParallax(st);
    dashiParallax(st);
    sauceParallax(st);
    enjoyParallax(st);
    
    if (winW < 768) {
        introParallaxM(st);
    } else {
        introParallax(st);
    }
    
    if(ratio < 1.5) {
        introParallaxH(ratio, st);
        $("#shabu-ingredients .content-container img").css({"height": "100%", "width":"auto"});
        $(".ingredient-text").css({"padding-left": "16%", "padding-right": "18%"});
        $(".goma-tare").css({"padding-top": "5%"});
    }
});

$(document).ready(function(e) {
    let winW = $(window).width(),
        winH = $(window).height(),
        st = $(window).scrollTop(),
        cookOffset = $("#shabu-cook").offset().top,
        cookDistance = cookOffset - st,
        potDistance = Math.abs(cookDistance),
        ratio = winW / winH;
    
    
    $(".loader").delay(2000).fadeOut(800, function() {
        firstAnimation();
    });
    historyAnimationInit(st);
    
    if(potDistance > 6 * winH) {
        $(".shabu-pot").css({position: "absolute", "bottom": 0});
        $(".shabu-pot-full").css({opacity: 1});
        $(".shabu-pot-enjoy").css({opacity: 1});
        $(".shabu-pot-ready").css({opacity: 0});
    }
    
    if (ratio < 1.5) {
        $("#first .open-img").css({"padding-top": 10 * ratio + "%"})
    }
});

function firstAnimation() {
    TweenMax.to(".shabu-top-left", .8, {left: 0, ease: Power2.easeInOut});
    TweenMax.to(".shabu-top-right", .8, {right: 0, delay: 0.2, ease: Power2.easeInOut});
    TweenMax.to(".shabu-top-bg", .8, {transform: "scale(1)", delay: 1, ease: Power2.easeOut});
    TweenMax.to("#first .open-caligraphy", .4, {opacity: 1, delay: 2, ease: Power0.easeOut});
    TweenMax.to("#first h1", .4, {opacity: 1, delay: 2, ease: Power0.easeOut});
    TweenMax.to("#first .scroll-hint", .4, {opacity: 1, delay: 2.5, ease: Power0.easeOut})
}

function firstParallax(st) {
    let openingOffset = $("#first").offset().top,
        openingDistance = openingOffset - st,
        distance = openingDistance * 0.01;

    $(".shabu-top-left, .shabu-top-right").css({"top": 0 - distance + "%"});
}

function introAnimation(winH, st) {
    let introOffset = $("#shabu-intro").offset().top,
        introDistance = introOffset - st,
        opacity = $("#shabu-intro .intro-text").css("opacity");

    if (introDistance < winH / 2 && opacity == 0) {
        TweenMax.to("#shabu-intro .intro-text", .4, {opacity: 1, ease: Power0.easeOut});
        TweenMax.to("#shabu-intro .intro-image", .6, {right: "11%", delay: .3, ease: Power2.easeInOut});
        TweenMax.to("#shabu-intro .intro-gif", .6, {right: "5%", delay: .5, ease: Power2.easeInOut});
    }
}

function introParallax(st) {
    let introOffset = $("#shabu-intro").offset().top,
        introDistance = introOffset - st,
        distance = introDistance * 0.01,
        distance2 = introDistance * 0.005;

    $(".intro-image").css({"top": 7 - distance + "%"});
    $(".intro-gif").css({"bottom": 15 + distance2 + "%"});
}

function introParallaxM(st) {
    let introOffset = $("#shabu-intro").offset().top,
        introDistance = introOffset - st,
        distance = introDistance * 0.01,
        distance2 = introDistance * 0.005;

    $(".intro-image").css({"top": 20 - distance + "%"});
    $(".intro-gif").css({"bottom": 30 + distance2 + "%"});
}

function introParallaxH(ratio, st) {
    let introOffset = $("#shabu-intro").offset().top,
        introDistance = introOffset - st,
        distance = introDistance * 0.01,
        distance2 = introDistance * 0.005;

    $(".intro-image").css({"padding-top": ratio * 5 + "%"});
    $(".intro-gif").css({"padding-bottom": ratio * 4 + "%"});
}

function historyAnimationInit(st) {
    let originOffset = $("#shabu-origin").offset().top,
        originDistance = originOffset - st;
    
    $(".shabu-history-overlay").css({"z-index": 2});
    $(".shabu-history").css({"z-index": 1});
    
    if(originDistance < 0) {
        $(".shabu-history-overlay").addClass("hide");
        $("#shabu-origin .curtain").css({"left": 0});
        $("#shabu-origin .text-container").css({"opacity": 1});
    }
}

function historyAnimation(st) {
    let originOffset = $("#shabu-origin").offset().top,
        originDistance = originOffset - st,
        opacity = $("#shabu-origin .text-container").css("opacity");
    
    if(originDistance < 10 && originDistance > 0 && opacity == 0) {
        $("#shabu-origin").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            $(".shabu-history-overlay").addClass("hide");
            TweenMax.to("#shabu-origin .curtain", .8, {left: 0, delay: 1, ease: Power2.easeInOut});
            TweenMax.to("#shabu-origin .text-container", .4, {opacity: 1, delay: 1.5, ease: Power2.easeOut});
            setTimeout(resumeScroll, 2000);
        });

        function resumeScroll() {
            $("#shabu-origin").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); });
        }  
    }
}

function dashiAnimation(winH, st) {
    let dashiOffset = $("#broth").offset().top,
        dashiDistance = dashiOffset - st,
        opacity = $(".dashi-3").css("opacity");

    if(dashiDistance < winH / 2 && opacity == 0) {
        $(".dashi-2").animate({opacity: 1}, 300, "linear");
        $(".dashi-1").delay(200).animate({opacity: 1}, 300, "linear");
        $(".dashi-3").delay(400).animate({opacity: 1}, 300, "linear");
        $("#broth .text-container").delay(600).animate({opacity: 1}, 300, "linear");
        $(".dashi-calligraphy").delay(900).animate({opacity: 0.2}, 300, "linear");
    }

    if(opacity == 1) {
        dashiImg();
    }
}

function dashiParallax(st) {
    let dashiOffset = $("#broth").offset().top,
        dashiDistance = dashiOffset - st,
        distance = dashiDistance * 0.015,
        distance2 = dashiDistance * 0.01,
        distance3 = dashiDistance * 0.005;

    $(".dashi-2").css({"top": 5 - distance + "%"});
    $(".dashi-1").css({"top": 15 - distance2 + "%"});
    $(".dashi-3").css({"bottom": 5 + distance3 + "%"});
}

function dashiImg() {
    $(".dashi-1, .dashi-2, .dashi-3").mouseover(function() {
        $(this).css({"z-index": 20});
    });

    $(".dashi-1").mouseout(function() {
        $(this).css({"z-index": 9});
    });

    $(".dashi-2").mouseout(function() {
        $(this).css({"z-index": 10});
    });

    $(".dashi-3").mouseout(function() {
        $(this).css({"z-index": 8});
    });
}

function ingredientAnimation(st) {
    let ingredientOffset = $("#shabu-ingredients").offset().top,
        ingredientDistance = ingredientOffset - st,
        opacity = $(".ingredients-second-container").css("opacity");

    if(ingredientDistance < 10 && ingredientDistance > 0 && opacity == 0) {
        $("#shabu-ingredients").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".shabu-ingredients-pre", .4, {opacity: 0, ease: Power0.easeInOut});
            TweenMax.staggerTo("#shabu-ingredients .content-container img", .2, {opacity: 1, ease: Power2.easeInOut}, 0.3);
            TweenMax.to("#shabu-ingredients .curtain", .4, {opacity: 1, delay: 3, ease: Power1.easeIn});
            TweenMax.to(".ingredients-second-container", .4, {opacity: 1, delay: 3.7, ease: Power2.easeInOut});
            setTimeout(resumeScroll, 3500);
        });

        function resumeScroll() {
            $("#shabu-ingredients").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); });
        } 
    }

    if(ingredientDistance < 0 && opacity ==0) {
        $(".shabu-ingredients-pre").css({"opacity": 0});
        $("#shabu-ingredients .content-container img").css({"opacity": 1});
        $("#shabu-ingredients .curtain").css({"opacity": 1});
        $(".ingredients-second-container").css({"opacity": 1});
    }
}

function cookAnimation(winH, st) {
    let cookOffset = $("#shabu-cook").offset().top,
        cookDistance = cookOffset - st,
        opacity = $(".shabu-pot-ready").css("opacity"),
        opacity2 = $(".shabu-pot-enjoy").css("opacity"),
        potDistance = Math.abs(cookDistance);

    if (cookDistance < 10 && opacity == 1) {
        $(".shabu-pot-ready").animate({opacity: 0}, 300, "linear");
        TweenMax.to(".shabu-pot", .3, {transform: "scale(0.3)", delay: 0.3, ease: Power2.easeInOut});
        $(".shabu-pot").delay(600).queue(function(next) {
            $(this).css({position: "fixed"});
            next();
        });
        $(".shabu-pot").css({"z-index": 6});
    }

    if (cookDistance < 0) {
        if (potDistance <= winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-0.png)"});
        } else if (potDistance <= 2 * winH && potDistance > winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-1.png)"});
            $("#shabu-napa .cook-content-left").animate({opacity: 1}, 300, "linear");
            $("#shabu-napa .cook-detail").animate({opacity: 1}, 300, "linear");
        } else if (potDistance <= 3 * winH && potDistance > 2 * winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-2.png)"});
            $("#shabu-crown .cook-content-left").animate({opacity: 1}, 300, "linear");
            $("#shabu-crown .cook-detail").animate({opacity: 1}, 300, "linear");
        } else if (potDistance <= 4 * winH && potDistance > 3 * winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-3.png)"});
            $("#shabu-bok .cook-content-left").animate({opacity: 1}, 300, "linear");
            $("#shabu-bok .cook-detail").animate({opacity: 1}, 300, "linear");
        }  else if (potDistance <= 5 * winH && potDistance > 4 * winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-4.png)"});
            $("#shabu-enoki .cook-content-left").animate({opacity: 1}, 300, "linear");
            $("#shabu-enoki .cook-detail").animate({opacity: 1}, 300, "linear");
        } else if (potDistance <= 6 * winH && potDistance > 5 * winH) {
            $(".shabu-pot").css({"background-image": "url(./img/shabu-pot-5.png)", "position": "fixed"});
            $("#shabu-beef .cook-content-left").animate({opacity: 1}, 300, "linear");
            $("#shabu-beef .cook-detail").animate({opacity: 1}, 300, "linear");
        } else {
            $(".shabu-pot").css({position: "absolute", "bottom": 0});
        }

        if(potDistance > 6 * winH && opacity2 == 0) {
            $(".shabu-pot-full").animate({opacity: 1}, 300, "linear");
            $(".shabu-pot-enjoy").delay(500).animate({opacity: 1}, 500, "linear");
        } else if (potDistance <= 6 * winH) {
            $(".shabu-pot-full").css({opacity: 0});
            $(".shabu-pot-enjoy").css({opacity: 0});
        }
    }

    if (cookDistance > 0 && opacity == 0) {
        $(".shabu-pot-ready").animate({opacity: 1}, 300, "linear");
        $(".shabu-pot").delay(300).queue(function(next) {
            $(this).css({position: "absolute", "top": 0});
            next();
        });
    }
}

$("#shabu-sauce img").on("click", function(e) {
    let clicked = $(this),
        className = $(clicked).attr("class"),
        otherPhoto = $("#shabu-sauce img").not(clicked),
        detail = $(".shabu-sauce-text");

    if(className == "goma-tare") {
        detail.fadeOut("fast", function() {
            detail.text("Whenever you have Shabu-shabu, you will feel that there is never enough goma-tare (sesame sauce). It has all the elements that you want: sweet, salty, and savory.");
            detail.fadeIn("fast");
        });

        clicked.css({"filter": "drop-shadow(-7px 7px 15px rgba(0, 0, 0, 0.75)) grayscale(0%)"});
        otherPhoto.css({"filter": "drop-shadow(7px -7px 15px rgba(0, 0, 0, 0.75)) grayscale(100%)"});
    } else if(className == "ponzu") {
        detail.fadeOut("fast", function() {
            detail.text("A classic Japanese condiment, Ponzu Sauce is a citrus based sauce with tart-tangy flavor similar to a vinaigrette. It contains a mix of ponzu (citrus juice of sudachi, yuzu, and kabosu and vinegar), soy sauce, sugar or mirin, and dashi. Because of its versatility and refreshing flavor, it becomes a perfect dipping sauce for shabu-shabu.");
            detail.fadeIn("fast");
        });

        clicked.css({"filter": "drop-shadow(7px -7px 15px rgba(0, 0, 0, 0.75)) grayscale(0%)"});
        otherPhoto.css({"filter": "drop-shadow(-7px 7px 15px rgba(0, 0, 0, 0.75)) grayscale(100%)"});
    } 
});

function sauceAnimation(st) {
    let sauceOffset = $("#shabu-sauce").offset().top,
        sauceDistance = sauceOffset - st,
        opacity = $(".goma-tare").css("opacity");

    if (sauceDistance < 10 && opacity == 0) {
        $(".shabu-sauce-text").animate({opacity: 1}, 500, "linear");
        $(".goma-tare").delay(300).animate({opacity: 1}, 500, "linear");
        $(".ponzu").delay(300).animate({opacity: 1}, 500, "linear");
    }
}

function sauceParallax(st) {
    let sauceOffset = $("#shabu-sauce").offset().top,
        sauceDistance = sauceOffset - st,
        distance = sauceDistance * 0.015,
        distance2 = sauceDistance * 0.01;

        $(".goma-tare").css({"top": 5 - distance2 + "%"});
        $(".ponzu").css({"top": 55 - distance + "%"});
}

function enjoyAnimation(st) {
    let enjoyOffset = $("#shabu-today").offset().top,
        enjoyDistance = enjoyOffset - st,
        opacity = $(".today-shabu").css("opacity");

    if (enjoyDistance < 10 && opacity == 0) {
        $("#shabu-today .today-shabu").animate({opacity: 1}, 500, "linear");
        $("#shabu-today .element-1").delay(200).animate({opacity: 1}, 500, "linear");
        $("#shabu-today .container").delay(600).animate({opacity: 1}, 500, "linear");
    }
}

function enjoyParallax(st) {
    let enjoyOffset = $("#shabu-today").offset().top,
        enjoyDistance = enjoyOffset - st,
        distance = enjoyDistance * 0.015,
        distance2 = enjoyDistance * 0.01;

    $(".today-shabu").css({"top": 10 - distance + "%"});
    $(".element-1").css({"top": 27 + distance2 + "%"});
}





























