$(document).ready(function(e) {
    soupIngredients();
    $(".loader").delay(2000).fadeOut(800);
});

function soupIngredients() {
    let image = $("#soup-ingredient-pic");
    $("#budae-paste").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/bean-paste.png");
            image.fadeIn("fast");
        });
    });
    $("#gochujang").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-gochujang.png");
            image.fadeIn("fast");
        });
    });
    $("#soy").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-soy.png");
            image.fadeIn("fast");
        });
    });
    $("#sesame").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-sesame.png");
            image.fadeIn("fast");
        });
    });
    $("#chili-powder").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-chili-powder.png");
            image.fadeIn("fast");
        });
    });
    $("#minced-garlic").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-garlic.png");
            image.fadeIn("fast");
        });
    });
    $("#salt-pepper").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-saltpepper.png");
            image.fadeIn("fast");
        });
    });
    $("#rice-wine").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-rice_wine.png");
            image.fadeIn("fast");
        });
    });
    $("#budae-water").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-water.png");
            image.fadeIn("fast");
        });
    });
    $("#soup .container ul li").mouseout(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sauce-mixed.png");
            image.fadeIn("fast");
        });
    });
}

$(".image-container").on("click", function(e) {
    let clicked = $(this);
    $(clicked).find(".extra").toggleClass("selected");
    return false;
})