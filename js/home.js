let potImages = new Array ("img/hotpot-top-view.png", "img/korean-pot-top-view.png", "img/shabu-top-view.png"),
    menuDeco1 = new Array ("img/top-2.png", "img/top-8.png","img/menu-shabu-meat.png"),
    menuDeco2 = new Array ("img/top-9.png", "img/top-11.png","img/menu-shabu-veg.png"),
    potName = new Array ("Budae Jjigae", "Shabu-shabu", "Sichuan Spicy Hot Pot"),
    potNameNative = new Array ("부대찌개", "しゃぶしゃぶ", "四川火锅"),
    links = new Array ("./hotpot.html", "./budae.html","./shabu.html"),
    firstSequence = new Array ("壹", "01", "01"),
    secondSequence = new Array ("02", "이", "02"),
    thirdSequence = new Array ("03", "03", "三"),
    index = 2;    

$(window).scroll(function(){
    let winW = $(window).width(),
        winH = $(window).height(),
        st = $(window).scrollTop();
    
    mapAnimation(st);
    textAnimation(st);
});

$(document).ready(function(e) {
    $(".loader").delay(2000).fadeOut(800);
    firstAnimation();
    $(".content-pics").on("click", function(e) {
        window.location = links[index - 1];
    });  
});

function firstAnimation() {
    changeImg();
    TweenMax.fromTo(".content-pics", 5, {left: "-100%"}, {left: "120%", ease: SlowMo.ease.config(0.7, 0.95, false), repeat:-1, repeatDelay: 2, onRepeat: changeImg});
    TweenMax.fromTo(".menu-pot", 5, {left: "-50%"}, {left: "120%", ease: SlowMo.ease.config(0.7, 0.94, false), repeat:-1, repeatDelay: 2});
    TweenMax.fromTo(".menu-deco-1", 5, {left: "0%"}, {left: "160%", ease: SlowMo.ease.config(0.7, 0.98, false), repeat:-1, repeatDelay: 2});
    TweenMax.fromTo(".menu-deco-2", 5, {left: "-80%"}, {left: "100%", ease: SlowMo.ease.config(0.7, 0.88, false), repeat:-1, repeatDelay: 2});
}

function changeImg() {
    $(".menu-pot").fadeOut(1, function() {
        $(this).attr('src', potImages[index]);
        $(this).fadeIn(1);
    });
    
    $(".menu-deco-1").fadeOut(1, function() {
        $(this).attr('src', menuDeco1[index]);
        $(this).fadeIn(1);
    });
    
    $(".menu-deco-2").fadeOut(1, function() {
        $(this).attr('src', menuDeco2[index]);
        $(this).fadeIn(1);
    });
    
    $(".pot-name").text(potName[index]);
    $(".pot-name-native").text(potNameNative[index]);
    $(".sequence-first").fadeOut("fast", function() {
        $(this).text(firstSequence[index]);
        $(this).fadeIn("fast");
    });
    $(".sequence-second").fadeOut("fast", function() {
        $(this).text(secondSequence[index]);
        $(this).fadeIn("fast");
    });
    $(".sequence-third").fadeOut("fast", function() {
        $(this).text(thirdSequence[index]);
        $(this).fadeIn("fast");
    });
    
    $(".content-pics").on("click", function(e) {
        window.location = links[index];
    });
    
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}

function mapAnimation(st) {
    let mapOffset = $("#menu-second").offset().top,
        mapDistance = mapOffset - st,
        opacity = $(".project-intro").css("opacity");
    
    if (mapDistance < 10 && mapDistance >= 0 && opacity == 0) {
        $("#menu-second").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            $(".asianmap").animate({opacity: 1}, 400, "linear");
            TweenMax.staggerTo(".pin", 0.5, {top: "50%", ease:Power2.easeInOut}, 0.2);
            $(".project-intro").delay(2000).animate({opacity: 1}, 400, "linear");
            setTimeout(resumeScroll, 2000);
        }); 
        
        function resumeScroll() {
            $("#menu-second").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
    
    if (mapDistance < 0 && opacity == 0) {
        $(".asianmap, .project-intro").css({"opacity": 1});
        $(".pin").css({"top": "50%"});
    }
}

function textAnimation(st) {
    let textOffset = $("#menu-third").offset().top,
        textDistance = textOffset - st,
        opacity = $("#menu-third .text-container").css("opacity");
    
    if (textDistance < 50 && textDistance >= 0 && opacity == 0) {
        $("#menu-third .text-container").animate({opacity: 1}, 400, "linear");
        $("#menu-third .circle").animate({opacity: 1}, 400, "linear");
    }
    
    if (textDistance < 0 && opacity == 0) {
        $("#menu-third .text-container").css({"opacity": 1});
        $("#menu-third .circle").css({"opacity": 1});
    }
}








