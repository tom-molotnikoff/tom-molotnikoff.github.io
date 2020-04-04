$(document).ready(function(){
    var lineNumbers = document.getElementsByClassName("lineNumber");
    for (i = 0; i < lineNumbers.length; i++) {
        if(i<10) {lineNumbers[i].innerHTML = "0" + i}
        else {lineNumbers[i].innerHTML = i;}
    }
});

var aboutExpander;
var insideAbout;
var aboutHidden;
var linksExpander;
var insideLinks;
var linksHidden;

$(document).ready(function(){

    aboutExpander = $(".aboutExpander");
    insideAbout = $("#insideAbout");
    aboutHidden = $("#aboutHidden");

    aboutExpander.click(function() {
        if (insideAbout.is(":visible")) {
            insideAbout.slideUp("fast", function() {
                aboutHidden.fadeIn("fast");
            });
        } else {
            aboutHidden.fadeOut("fast", function() {
                insideAbout.slideDown("fast");
            });
        }
    });
});

$(document).ready(function(){

    linksExpander = $(".linksExpander");
    insideLinks = $("#insideLinks");
    linksHidden = $("#linksHidden");

    linksExpander.click(function() {
        if (insideLinks.is(":visible")) {
            insideLinks.slideUp("fast", function() {
                linksHidden.fadeIn("fast");
            });
        } else {
            linksHidden.fadeOut("fast", function() {
                insideLinks.slideDown("fast");
            });
        }
    });
}); 

var type;
var typeSlow;
var typeSlowest;
var typeSpecial;
var expander;
var education;
var aboutMe;

$(document).ready(function() {
    type = $(".type");
    typeSlow = $(".typeSlow");
    typeSlowest = $(".typeSlowest");
    typeSpecial = $(".typeSpecial");
    expander = $(".expander");
    education = $("#education");
    aboutMe = $("#aboutMe");

    type.animate({width: '100%'}, 750);
    typeSlow.animate({width: '100%'}, 1000);
    typeSlowest.animate({width: '100%'}, 1500);
    typeSpecial.animate({width: '100%'}, 500);
    $(".scrollEducation").fadeIn("fast");
});


var newVal = 0
var oldVal = 0;
document.addEventListener("wheel", function (e) {
    // to make it work on IE or Chrome
    
        var variation = parseInt(e.deltaY);
        
        newVal = oldVal + variation;
        if (newVal < 0) {newVal=0;}
        if (newVal > 101) {newVal=101;}

        if (newVal < 100) {
            if (education.is(":visible")) {
                education.fadeOut(200, function(){
                    aboutMe.fadeIn(100);
                });
            }

            if (newVal < oldVal) {
                type.stop();
                typeSlow.stop();
                typeSlowest.stop();
                expander.stop();
                expander.animate({opacity: '100%'}, 200);
                type.animate({width: '100%'}, 1000);
                typeSlow.animate({width: '100%'}, 1500);
                typeSlowest.animate({width: '100%'}, 2000);
            }

            if($(".scrollProjects").is(":visible")){
                $(".scrollProjects").fadeOut("fast", function(){
                    $(".scrollEducation").fadeIn("fast");
                });
            }
        } else {

            if (newVal > oldVal) {
                type.stop();
                typeSlow.stop();
                typeSlowest.stop();
                expander.stop();
                expander.animate({opacity: '0%'}, 200);
                type.animate({width: '0%'}, 750, function(){
                    
                });
                typeSlow.animate({width: '0%'}, 1000);
                typeSlowest.animate({width: '0%'}, 1500, function(){
                    //aboutMe.animate({height: '0px'}, 200, function(){
                        aboutMe.fadeOut(200, function() {
                            education.fadeIn(200);
                        });
                        
                    //});
                });
            }


            if($(".scrollEducation").is(":visible")){
                $(".scrollEducation").fadeOut("fast", function(){
                    $(".scrollProjects").fadeIn("fast");
                });
            }
        } 
        oldVal = newVal;
        return false;

}, true);