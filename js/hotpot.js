$(window).scroll(function(){
    let winW = $(window).width(),
        winH = $(window).height(),
        st = $(window).scrollTop();
    
    introDishScroll(st);
    originFirstAnimation(winW, winH, st);
    originSecondAnimation(st);
    originThirdAnimation(st);
    potFirstAnimation(st);
    potSecondAnimation(winH, st);
    soupFirstTrigger(winH, st);
    soupAnimation(st);
    cookAnimation(winH, st);
    sauceAnimation(st);
    todayAnimation(st);
    
    if(winW >= 768) {
        ingredientAnimation(st);
    }
    
    if(winW < 768) {
        ingredientAnimationM(st);
    }

});

$(document).ready(function(e) {
    let winW = $(window).width(),
        winH = $(window).height(),
        st = $(window).scrollTop(),
        ratio = winW / winH,
        originOffset = $('#origin').offset().top,
        originSVGOffset = $('#origin .map').offset().top,
        originHistoryOffset = $("#origin .history").offset().top,
        potPotOffset = $("#pot .pot-1").offset().top,
        soupOffeset = $("#soup").offset().top,
        originDistance = (originOffset - st),
        originSVGDistance = (originSVGOffset - st),
        originHistoryDistance = (originHistoryOffset - st),
        potPotDistance = (potPotOffset - st),
        soupDistance = (soupOffeset - st);
    
    $(".loader").delay(2000).fadeOut(800, function() {
        introDishAnimation(st);
    });
    
    soupIngredients();
    
    if(ratio < 1.5) {
        $("#intro .pot").css({"padding-top": "8%"});
    }
    
    if(originDistance < winH) {
        $("#origin .intro-text").css({"opacity": 1});
        $("#origin .gif-holder").css({"left": "10%"});
        $("#origin .img-holder").css({"left": "63%"});
    }
    
    if(originSVGDistance < 0) {
        $("#origin svg").css({"transform": "scale(3)"});
        $("#origin .map-vector").css({"left": "20%", top: "-40%"});
        $("#Sichuan-2").css({opacity: 1});
        $("#origin .map .map-text").css({opacity: 1});
        $(".map-curtain").css({left: 0});
    }
    
    if(originHistoryDistance < 0) {
        $(".history-cover").css({"opacity": 0});
        $("#origin .layer-1").css({"opacity": 0});
        $("#origin .layer-2").css({"opacity": 0});
        $("#origin .layer-3").css({"opacity": 0});
        $("#origin .layer-4").css({"opacity": 0});
        $("#origin .layer-5").css({"opacity": 0});
        $("#origin .layer-6").css({"opacity": 0});
        $("#origin .layer-7").css({"opacity": 0});
        $("#origin .layer-8").css({"opacity": 0});
        $("#origin .layer-9").css({"transform": "scale(1.2)"});
        $(".history-text").css({opacity: 1});
        $(".history-curtain").css({left: 0}); 
    }
    
    if(potPotDistance < 0) {
        $(".pot-cover").css({"opacity": 0});
        $("#pot .layer-1").css({"opacity": 0});
        $("#pot .layer-2").css({"opacity": 0});
        $("#pot .layer-3").css({"opacity": 0});
        $("#pot .layer-4").css({"opacity": 0});
        $("#pot .layer-5").css({"opacity": 0});
        $("#pot .layer-6").css({"opacity": 0});
        $("#pot .layer-7").css({"opacity": 0});
        $("#pot .layer-8").css({"opacity": 0});
        $("#pot .layer-9").css({"opacity": 0});
        $(".pot-text").css({opacity: 1});
        $(".pot-curtain").css({height: "100vh", "opacity": 1});
        $(".yuan-yang").css({transform: "scale(1)", "margin-left": "0%", "opacity": 1});
        $(".yuan").css({left: "15%"});
        $(".yang").css({left: "29%"});
        $(".yuan-yang-text").css({"opacity": 1});
    }
    
    if(soupDistance < 0) {
        $(".list li").css({"opacity": 0.4});
        $(".soup-pics").css({"opacity": 1});
    }
});

function soupIngredients() {
    let image = $("#soup-ingredient-pic");
    $("#bean-paste").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/bean-paste.png");
            image.fadeIn("fast");
        });
    });
    $("#cinnamon").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/cinnamon.png");
            image.fadeIn("fast");
        });
    });
    $("#ginger").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/ginger.png");
            image.fadeIn("fast");
        });
    });
    $("#garlic").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/garlic.png");
            image.fadeIn("fast");
        });
    });
    $("#fennel").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/fennel.png");
            image.fadeIn("fast");
        });
    });
    $("#sand-ginger").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sand-ginger.png");
            image.fadeIn("fast");
        });
    });
    $("#dried-chili").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/dried-chili.png");
            image.fadeIn("fast");
        });
    });
    $("#star-anise").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/star-anise.png");
            image.fadeIn("fast");
        });
    });
    $("#sichuan-peppercorn").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/peppercorns.png");
            image.fadeIn("fast");
        });
    });
    $("#black-cardamom").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/black-cardamom.png");
            image.fadeIn("fast");
        });
    });
    $("#green-cardamom").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/green-cardamom.png");
            image.fadeIn("fast");
        });
    });
    $("#liquorice").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/licorice.png");
            image.fadeIn("fast");
        });
    });
    $("#soup .container ul li").mouseout(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/soup-ingredient.png");
            image.fadeIn("fast");
        });
    });
}

function introDishAnimation(st) {
    if(st === 0) {
        TweenMax.to(".sauce-1", .2, {top: "15%", delay: 0.1, ease:Power2.easeInOut});
        TweenMax.to(".sauce-2", .2, {top: "5%", delay: 0.1, ease:Power2.easeInOut});
        TweenMax.to(".veg", .25, {top: "1%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".fruit", .25, {top: "1.5%", delay: 0.1, ease:Power2.easeInOut});
        TweenMax.to(".dessert", .25, {left: "10%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".meat-1", .25, {left: "77%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".sauce-3", .2, {left: "75%", delay: 0.1, ease:Power2.easeInOut});
        TweenMax.to(".sauce-4", .2, {left: "25%", delay: 0.1, ease:Power2.easeInOut});
        TweenMax.to(".meat-2", .25, {top: "54%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".fish", .25, {top: "56%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".dumpling", .25, {top: "49%", delay: 0.15, ease:Power2.easeInOut});
        TweenMax.to(".pot", .25, {top: "12%", delay: 0.5, ease:Power4.easeInOut});
        TweenMax.to(".wp", .5, {right: 0, delay: 1.5, ease:Power2.easeInOut});
        TweenMax.fromTo([".scroll-hint", "#intro h3", ".title"], .8, {scale:0, opacity:0}, {scale:1, opacity:1, delay: 2, ease:Power4.easeInOut});
        TweenMax.fromTo(".steam", .7, {scale:.5, opacity:0}, {scale:1.1, opacity:0.3, delay: 2.5, ease:Power4.easeInOut});
    } else {
        $(".sauce-1").css({"top": "15%"});
        $(".sauce-2").css({"top": "5%"});
        $(".veg").css({"top": "1%"});
        $(".fruit").css({"top": "15%"});
        $(".dessert").css({"left": "10%"});
        $(".meat-1").css({"left": "77%"});
        $(".sauce-3").css({"left": "75%"});
        $(".sauce-4").css({"left": "25%"});
        $(".meat-2").css({"top": "54%"});
        $(".fish").css({"top": "56%"});
        $(".dumpling").css({"top": "49%"});
        $(".pot").css({"top": "12%"});
        $(".wp").css({"right": 0});
        $(".scroll-hint").css({"scale": 1, "opacity": 1});
        $("#intro h3").css({"scale": 1, "opacity": 1});
        $(".title").css({"scale": 1, "opacity": 1});
        $(".steam").css({"scale": 1.1, "opacity": 0.3});
    }
}

function introDishScroll(st) {
    $("#intro .sauce-1").css({"top": 15 - st * 0.01 + "%"});
    $("#intro .sauce-2").css({"top": 5 - st * 0.01 + "%"});
    $("#intro .sauce-3").css({"top": 45 - st * 0.01 + "%"});
    $("#intro .sauce-4").css({"top": 45 - st * 0.01 + "%"});
    $("#intro .pot").css({"top": 12 - st * 0.015 + "%"});
    $("#intro .steam").css({"top": 8 - st * 0.015 + "%"});
    $("#intro .meat-1").css({"top": 15 - st * 0.02 + "%"});
    $("#intro .meat-2").css({"top": 54 - st * 0.02 + "%"});
    $("#intro .veg").css({"top": 1 - st * 0.02 + "%"});
    $("#intro .fish").css({"top": 56 - st * 0.02 + "%"});
    $("#intro .dumpling").css({"top": 49 - st * 0.02 + "%"});
    $("#intro .fruit").css({"top": 1.5 - st * 0.02 + "%"});
    $("#intro .dessert").css({"top": 25 - st * 0.02 + "%"});
}

function originFirstAnimation(winW, winH, st) {
    let originOffset = $('#origin').offset().top,
        originDistance = originOffset - st,
        originTextOpacity = $("#origin .intro-text").css("opacity");
    
    if(originDistance <= 50 && originTextOpacity === "0") {
        $("#origin").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to("#origin .intro-text", 1.0, {opacity: 1, ease:Power4.easeInOut});
            TweenMax.to("#origin .gif-holder", 1.8, {left:"10%", delay: 0.8, ease:Power2.easeInOut});
            TweenMax.to("#origin .img-holder", 1.8, {left:"63%", delay: 0.8, ease:Power2.easeInOut});
            setTimeout(resumeScroll, 3000);
        });
        
        function resumeScroll() {
            $("#origin").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
    }}
    
    if(winW < 1600) {
        $("#origin .gif-holder").css({"top": 88 - st * 0.02 + "%"});
    } else {
        $("#origin .gif-holder").css({"top": 98 - st * 0.02 + "%"});
    }
    $("#origin .img-holder").css({"top": 20 - st * 0.01 + "%"});
}

function originSecondAnimation(st) {
    let originSVGOffset = $("#origin .map").offset().top,
        originDistance = originSVGOffset - st,
        originPOpacity = $("#origin .map-text").css("opacity");

    if(originDistance <= 10 && originPOpacity === "0") {
        $("#origin .map").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to("#origin svg", 2.0, {transform: "scale(3)", ease: SlowMo.ease.config(0.4, 0.4, false)});
            TweenMax.to("#origin .map-vector", 2.0, {left: "20%", top: "-40%", delay:0.4, ease: Power4.easeInOut});
            TweenMax.to("#origin #Sichuan-2", 2.0, {opacity: 1, delay: 2.0, ease:Power4.easeInOut});
            TweenMax.to("#origin .map .map-text", 1.0, {opacity: 1, delay: 3.5, ease:Power4.easeInOut});
            TweenMax.to(".map-curtain", 1.0, {left: 0, delay: 4.0, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 5000);
        }); 
        
        function resumeScroll() {
            $("#origin .map").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
}

function originThirdAnimation(st) {
    let originHistoryOffset = $("#origin .history").offset().top,
        originDistance = originHistoryOffset - st,
        originPOpacity = $("#origin .history-text").css("opacity");
    
    if(originDistance <= 5 && originPOpacity === "0") {
        $("#origin .history").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".history-cover", 0.3, {opacity: 0, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-1", 0.3, {opacity: 0, delay: 0.3, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-2", 0.3, {opacity: 0, delay: 0.6, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-3", 0.3, {opacity: 0, delay: 0.9, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-4", 0.3, {opacity: 0, delay: 1.2, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-5", 0.3, {opacity: 0, delay: 1.5, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-6", 0.3, {opacity: 0, delay: 1.8, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-7", 0.3, {opacity: 0, delay: 2.1, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-8", 0.3, {opacity: 0, delay: 2.4, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-9", 2.2, {transform: "scale(1.2)", delay: 2.6, ease:Power3.easeInOut});
            TweenMax.to(".history-text", 1.0, {opacity: 1, delay: 3.8, ease:Power4.easeInOut});
            TweenMax.to(".history-curtain", 1.0, {left: 0, delay: 4.5, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 4500);
        }); 
        
        function resumeScroll() {
            $("#origin .history").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
}

function potFirstAnimation(st) {
    let potPotOffset = $("#pot .pot-0").offset().top,
        potDistance = potPotOffset - st,
        potOpacity = $("#pot .layer-1").css("opacity");
    
    if(potDistance <= 10 && potOpacity === "1") {
        $("#pot").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".pot-cover", 1.0, {opacity: 0, ease:Power3.easeInOut});
            TweenMax.to("#pot .layer-1", 0.3, {opacity: 0, delay: 1.0, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-2", 0.3, {opacity: 0, delay: 1.3, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-3", 0.3, {opacity: 0, delay: 1.6, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-4", 0.3, {opacity: 0, delay: 1.9, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-5", 0.3, {opacity: 0, delay: 2.2, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-6", 0.3, {opacity: 0, delay: 2.5, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-7", 0.3, {opacity: 0, delay: 2.8, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-8", 0.3, {opacity: 0, delay: 3.1, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-9", 0.3, {opacity: 0, delay: 3.4, ease:Power0.easeNone});
            TweenMax.to(".pot-text", 1.0, {opacity: 1, delay: 3.5, ease:Power4.easeInOut});
            TweenMax.to(".pot-curtain", 1.0, {height: "100vh", delay: 4.3, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 4300);
            $(".pot-1").css({"position": "fixed"});
            $(".pot-2").css({"position": "fixed", "bottom":"0%"});
        }); 
        
        function resumeScroll() {
            $("#pot").on("scroll touchmove mousewheel", function(e) { 
                $(this).unbind(); 
            });
        }
    }
}

function potSecondAnimation(winH, st) {
    let potPotOffset = $("#pot .pot-3").offset().top,
        potDistance = potPotOffset - st,
        potPosition = $(".pot-1").css("position");
    
    if(potPosition === "fixed" && potDistance < winH - 30) {
        let percent = potDistance / winH;
        percent = Math.max(0, percent);
        $(".pot-1").css({"opacity": percent});
        TweenMax.to(".yuan-yang", 2, {opacity:1, ease:Power0.easeInOut});
        
        if(potDistance < 20 && potPosition === "fixed") {
            $("#pot").on("scroll touchmove mousewheel", function(e) {
                e.preventDefault();
                TweenMax.to(".yuan-yang", 0.7, {transform: "scale(1)", marginLeft: "0%", delay: .5, ease:Power0.easeInOut});
                TweenMax.to(".yuan", 1.5, {left:"15%", delay:0.5, ease:Power4.easeInOut});
                TweenMax.to(".yang", 1.5, {left:"29%", delay:0.5, ease:Power4.easeInOut});
                TweenMax.to(".yuan-yang-text", 1, {opacity:1, delay:0.5, ease:Power4.easeInOut});
                setTimeout(resumeScroll, 1500);
            });
            
            function resumeScroll() {
            $("#pot").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
            }
        }
    }
}

function soupFirstTrigger(winH, st) {
    let soupOffset = $("#soup .container").offset().top,
        soupDistance = soupOffset - st,
        potPosition = $(".pot-1").css("position");
        
    if(soupDistance < winH && potPosition === "fixed") {
        $(".pot-1").css({"position": "absolute"});
        $(".pot-2").css({"position": "absolute"});
        $(".pot-cover").css({"opacity": 0});
        $("#pot .layer-1").css({"opacity": 0});
        $("#pot .layer-2").css({"opacity": 0});
        $("#pot .layer-3").css({"opacity": 0});
        $("#pot .layer-4").css({"opacity": 0});
        $("#pot .layer-5").css({"opacity": 0});
        $("#pot .layer-6").css({"opacity": 0});
        $("#pot .layer-7").css({"opacity": 0});
        $("#pot .layer-8").css({"opacity": 0});
        $("#pot .layer-9").css({"opacity": 0});
        $(".pot-1").css({"opacity": 1});
    }
}

function soupAnimation(st) {
    let soupOffset = $("#soup .container").offset().top,
        soupDistance = soupOffset - st,
        soupPicOpacity = $(".soup-pics").css("opacity");
    
    if(soupDistance < 10 && soupPicOpacity == 0) {
        $("#soup").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.staggerTo(".list.left li", 0.5, {opacity: 0.4}, 0.3);
            TweenMax.staggerTo(".list.right li", 0.5, {opacity: 0.4, delay: 1.6}, 0.3);
            TweenMax.to(".soup-pics", 0.5, {opacity: 1, delay: 3.2})
            setTimeout(resumeScroll, 3300);
        });
        
        function resumeScroll() {
            $("#soup").on("scroll touchmove mousewheel", function(e) { 
                $(this).unbind(); 
            });
        }
    }   
}

function ingredientAnimation(st) {
    let ingredientsOffset = $("#ingredients").offset().top,
        ingredientsDistance = ingredientsOffset - st;
    
    $(".cook-chili").css({"top": 0 + ingredientsDistance * 0.005 + "%"});
    $(".pour-soup").css({"top": 8 + ingredientsDistance * 0.005 + "%"});
    $(".lamb").css({"top": 20 + ingredientsDistance * 0.01 + "%"});
    $(".pork").css({"top": 32 + ingredientsDistance * 0.01 + "%"});
    $(".lotus").css({"top": 41 + ingredientsDistance * 0.005 + "%"});
    $(".napa").css({"top": 49 + ingredientsDistance * 0.005 + "%"});
    $(".vegetable").css({"top": 60 + ingredientsDistance * 0.005 + "%"});
    $(".fish-ball").css({"top": 70 + ingredientsDistance * 0.003 + "%"});
    $(".duck").css({"top": 84 + ingredientsDistance * 0.003 + "%"});
}

function ingredientAnimationM(st) {
    let ingredientsOffset = $("#ingredients").offset().top,
        ingredientsDistance = ingredientsOffset - st;
    
    $(".cook-chili").css({"top": 0 + ingredientsDistance * 0.005 + "%"});
    $(".pour-soup").css({"top": 14 + ingredientsDistance * 0.005 + "%"});
    $(".lamb").css({"top": 18 + ingredientsDistance * 0.01 + "%"});
    $(".pork").css({"top": 32 + ingredientsDistance * 0.01 + "%"});
    $(".lotus").css({"top": 41 + ingredientsDistance * 0.005 + "%"});
    $(".napa").css({"top": 47 + ingredientsDistance * 0.005 + "%"});
    $(".vegetable").css({"top": 57 + ingredientsDistance * 0.005 + "%"});
    $(".fish-ball").css({"top": 74 + ingredientsDistance * 0.003 + "%"});
    $(".duck").css({"top": 77 + ingredientsDistance * 0.003 + "%"});
}


$(".image-container").on("click", function(e) {
    let clicked = $(this);
    $(clicked).find(".extra").toggleClass("selected");
    return false;
})

function cookAnimation(winH, st) {
    let cookOffset = $("#cook").offset().top,
        cookDistance = cookOffset - st,
        sauceOffset = $("#sauce").offset().top,
        sauceDistance = sauceOffset - st;
    
    if(cookDistance > 0) {
        $("#cook .container").css({"position": "absolute", "top": 0, "bottom": "auto"});
    }
    
    if(cookDistance < 0) {
        $("#cook .container").css({"position": "fixed"});
        cookScrollAnimation(winH, cookDistance);
    }
    
    if(sauceDistance < winH) {
        $("#cook .container").css({"position": "absolute", "bottom": 0, "top": "auto"});
    }
}

function cookScrollAnimation(winH, cookDistance) {
    let watchOpacity = $(".stopwatch").css("opacity"),
        percent1 = Math.max(0, (winH + 1.5 * cookDistance) / winH),
        ptranslateY = -5 * percent1,
        percent2 = Math.max(0, (2 * winH + 1.5 * cookDistance) / winH),
        mark1 = winH + cookDistance,
        mark2 = 2 * winH + cookDistance,
        mark3 = 3 * winH + cookDistance;
        
    $(".cook-cover").css({"opacity": percent1});
    $(".cook-content").css({"opacity": 1 - percent1});
    $(".cook-content p").css({"transform": "translateY(" + ptranslateY + "em)"});
    
    if(mark1 < 0) {
        $(".pick-up").css({"opacity": 1 - percent2});
    }
    
    if(mark2 < 100 && watchOpacity == 0) {
        let count = $(('#count'));
        $({ Counter: 0 }).animate({ Counter: count.text() }, {
          duration: 1500,
          easing: 'linear',
          step: function () {
            count.text(Math.ceil(this.Counter)+ "%");
          }
        });

        let s = Snap('#animated');
        let progress = s.select('#progress');

        progress.attr({strokeDasharray: '0, 251.2'});
        Snap.animate(0, 251.2, function(value) {
            progress.attr({ 'stroke-dasharray':value+',251.2'});
        }, 1500);
        $(".stopwatch").css({"opacity": 1});
        $(".raw-meat").css({"opacity": 0});
        $(".submerge").css({"opacity": 1});
    }
    
    if(mark3 < 300) {
        $(".remove-eat").css({"opacity": 1});
    }
}

$(".right-content div img").on("click", function(e) {
    let clicked = $(this),
        className = $(clicked).attr("id"),
        productName = className.replace(/-/g, " "),
        image = $(".sauce-name img"),
        name = $("#product-name"),
        detail = $("#sauce-detail"),
        otherPhoto = $(".sauce-photo").not(clicked);
    
    clicked.css({"filter": "grayscale(0%)"});
    otherPhoto.css({"filter": "grayscale(100%)"});
    
    name.fadeOut("fast", function() {
            name.text(productName);
            name.fadeIn("fast");
        });
    
    image.fadeOut("fast", function() {
            image.attr("src", "img/" + className + "-chinese.png");
            image.fadeIn("fast");
        });
    
    if(className == "sugar") {
        detail.fadeOut("fast", function() {
            detail.text("Sugar can add some sweet flavor in the dipping sauce which will help relieve the feeling of spicy in your mouth. It is usually added with sesame paste.");
            detail.fadeIn("fast");
        });
    } else if(className == "dou-chi") {
        detail.fadeOut("fast", function() {
            detail.text("Dou-chi is a type of fermented and salted black soybean. They are a flavoring that is very popular in the cuisine of China. Adding it in the dipping sauce will give you a taste of fermented spiciness.");
            detail.fadeIn("fast");
        });
    } else if(className == "sha-cha") {
        detail.fadeOut("fast", function() {
            detail.text("Sha-cha is made from soybean oil, garlic, shallots, chilis, brill fish, and dried shrimp. It has a savory and slightly spicy taste which will give your sauce the taste of Umami and seafood.");
            detail.fadeIn("fast");
        });
    } else if(className == "chili-oil") {
        detail.fadeOut("fast", function() {
            detail.text("Wondering why adding chili-oil to a dipping sauce for spicy hot pot? Well, if you are a spicy lover, the hot pot will never be too spicy for you. It is provide for some hardcore spicy lovers!");
            detail.fadeIn("fast");
        });
    } else if(className == "oyster-sauce") {
        detail.fadeOut("fast", function() {
            detail.text("Oyster sauce is made from oyster extracts, sugar, salt, and water thickened with corn starch. It gives a unique taste of extracted oyster which makes the spicy hot pot special.");
            detail.fadeIn("fast");
        });
    } else if(className == "sesame-paste") {
        detail.fadeOut("fast", function() {
            detail.text("Sesame-paste is made from toasted ground hulled sesame seeds. It is one of the popular bases of the dipping sauce. Even eating spicy hot pot with plain sesame-paste will give you an unforgettable taste.");
            detail.fadeIn("fast");
        });
    } else if(className == "soy-sauce") {
        detail.fadeOut("fast", function() {
            detail.text("Soy-sauce is usually used to add saltness of the sauce. The Chinese soy-sauce is sometimes flavored with seafood extraction which can provide a special taste to the dipping sauce.");
            detail.fadeIn("fast");
        });
    } else if(className == "sesame-oil") {
        detail.fadeOut("fast", function() {
            detail.text("Sesame oil is a magical dipping sauce. It increases the fresh and delicious flavor of the food. It also helps smooth and moisturize the food. In the opinion of traditional Chinese medicine, sesame helps balance the spiciness of Sichuan pepper.");
            detail.fadeIn("fast");
        });
    } else if(className == "spice-powder") {
        detail.fadeOut("fast", function() {
            detail.text("Spice-powder usually contains crunched Sichuan pepper and dried chili. Similar to chili-oil, it is for people who are true spicy lovers. If you are one of them, do not hesitate to try some!");
            detail.fadeIn("fast");
        });
    } else if(className == "fermented-tofu") {
        detail.fadeOut("fast", function() {
            detail.text("Fermented-tofu has a special mouthfeel similar to certain dairy products due to the breakdown of tis proteins. It is usually added to sesame-paste based sauce to give the special and smooth taste.");
            detail.fadeIn("fast");
        });
    } else if(className == "vinegar") {
        detail.fadeOut("fast", function() {
            detail.text("Vinegar is for people who love sour taste. When having seafood in the hotpot, some people would like to add some vinegar into the dipping sauce to enrich the seafood taste.");
            detail.fadeIn("fast");
        });
    } else if(className == "olive-oil") {
        detail.fadeOut("fast", function() {
            detail.text("Olive-oil is an option similar to sesame oil. It is one of the dipping sauce bases. Dipping hot and spicy food in olive-oil will help cool down the food and balance the spicy taste.");
            detail.fadeIn("fast");
        });
    } else if(className == "green-onion") {
        detail.fadeOut("fast", function() {
            detail.text("Green-onion, or scallion, is the combination of chopped green-onion leaves and roots. People usually choose to add them into the dipping sauce as an accompaniment to give fresh taste.");
            detail.fadeIn("fast");
        });
    } else if(className == "coriander") {
        detail.fadeOut("fast", function() {
            detail.text("Similar to green-onion, coriander is another accompaniment to most of the dipping sauce. It will add fabulous and unique fresh taste into the dipping sauce");
            detail.fadeIn("fast");
        });
    } else if(className == "crackers") {
        detail.fadeOut("fast", function() {
            detail.text("Crackers usually contain crunched peanut and sesame. They will add a crispy and crunchy texture to the food after dipping into the sauce.");
            detail.fadeIn("fast");
        });
    } else if(className == "garlic-pepper") {
        detail.fadeOut("fast", function() {
            detail.text("Garlic and green peppers are provided to add other types of spiciness. It will not only increase the spiciness of the food, but also give various types of spicy tastes to the food. ");
            detail.fadeIn("fast");
        });
    }
})

function sauceAnimation(st) {
    let sauceOffest = $("#sauce").offset().top,
        sauceDistance = sauceOffest - st;
    
    $(".sugar").css({"top": 15 + sauceDistance * 0.025 + "vh"});
    $(".dou-chi").css({"top": 34 + sauceDistance * 0.029 + "vh"});
    $(".chili-oil").css({"top": 49 + sauceDistance * 0.034 + "vh"});
    $(".oyster-sauce").css({"top": 66 + sauceDistance * 0.039 + "vh"});
    $(".sha-cha").css({"top": 2 + sauceDistance * 0.02 + "vh"});
    $(".soy-sauce").css({"top": 19 + sauceDistance * 0.026 + "vh"});
    $(".sesame-oil").css({"top": 35 + sauceDistance * 0.03 + "vh"});
    $(".spice-powder").css({"top": 53 + sauceDistance * 0.036 + "vh"});
    $(".fermented-tofu").css({"top": 76 + sauceDistance * 0.04 + "vh"});
    $(".sesame-paste").css({"top": 3 + sauceDistance * 0.02 + "vh"});
    $(".vinegar").css({"top": 20 + sauceDistance * 0.027 + "vh"});
    $(".olive-oil").css({"top": 36 + sauceDistance * 0.031 + "vh"});
    $(".green-onion").css({"top": 53 + sauceDistance * 0.036 + "vh"});
    $(".coriander").css({"top": 76 + sauceDistance * 0.041 + "vh"});
    $(".crackers").css({"top": 12 + sauceDistance * 0.03 + "vh"});
    $(".garlic-pepper").css({"top": 52 + sauceDistance * 0.035 + "vh"});
    
    if(sauceDistance < 100) {
        $("#sauce .left-content p").css({"opacity": 1});
        $("#sauce .left-content p").css({"transform": "translateY(0)"});
    }
}

function todayAnimation(st) {
    let todayOffset = $("#today").offset().top,
        todayDistance = todayOffset - st,
        containerOpacity = $("#today .container").css("opacity");
    
    $("#today .container p").css({"padding-top": 7 + todayDistance * 0.04 + "em"});
    
    if(todayDistance < 10 && containerOpacity == 0) {
        $("#today").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".element-1", 1.5, {left:"38%", ease:Power4.easeInOut});
            TweenMax.to(".today-hotpot", 1.5, {left:"10%", ease:Power4.easeInOut});
            TweenMax.to(".element-2", 0.6, {opacity:1, delay: 1, ease:Power0.easeInOut});
            TweenMax.to("#today .container", 0.6, {opacity:1, delay: 1, ease:Power0.easeInOut});
            setTimeout(resumeScroll, 1500);
        });
        
        function resumeScroll() {
            $("#today").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
}

$(".back-to-top").on("click", function() {
    window.scrollTo(0, 0);
})

$("#work a").on("click", function() {
    window.scrollTo(0, 0);
})
