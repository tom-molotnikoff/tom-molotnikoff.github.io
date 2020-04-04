
$(document).ready(function(){

    // Cache all the selectors - save time and bugs
    var lineNumbers = $(".lineNumber");
    var aboutExpander = $(".aboutExpander");
    var insideAbout = $("#insideAbout");
    var aboutHidden = $("#aboutHidden");
    var linksExpander = $(".linksExpander");
    var insideLinks = $("#insideLinks");
    var linksHidden = $("#linksHidden");
    var type = $(".type");
    var typeSlow = $(".typeSlow");
    var typeSlowest = $(".typeSlowest");
    var expander = $(".expander");
    var aboutMe = $("#aboutMe");
    var education = $("#education");
    var projects = $("#projects");
    var pastWork = $("#pastWork");
    var pages = $(".page");
    var scrollMore = $(".scrollMore");
    var scrollEducation = $("#scrollEducation");
    var scrollProjects = $("#scrollProjects");
    var scrollPastWorkPage = $("#scrollPastWorkPage ");
    var contactMe = $("#contactMe");

    // Handler for aboutMe function slide down and slide up
    aboutExpander.click(function() {expanderTransition(insideAbout, aboutHidden);});
    // Handler for pageLinks function slide down and slide up
    linksExpander.click(function() {expanderTransition(insideLinks, linksHidden);});

    // Expand a code block out or in
    function expanderTransition(inside, hidden){
        if (!inside.is(":visible")) {
            hidden.fadeOut("fast", function() {inside.slideDown("fast");});
        } else {
            inside.slideUp("fast", function() {hidden.fadeIn("fast")});
        }
    }

    // Perform the typing transition
    // False = type backwards
    // True = type forwards
    // Callback function is executed after the longest animation
    // cbPageTo* are there explicitly for the swapPagesTransition as it is used frequently    
    function typeTransition(direction, callback, cbPageToClose, cbPageToOpen) {
        callback = callback || false;
        cbPageToClose = cbPageToClose || false;
        cbPageToOpen = cbPageToOpen || false;
        type.stop();typeSlow.stop();typeSlowest.stop();expander.stop();
        var endWidth;
        if (direction) {endWidth = "100%";}
        else {endWidth = "0%";}

        expander.animate({opacity: endWidth}, 200);
        type.animate({width: endWidth}, 750);
        typeSlow.animate({width: endWidth}, 1000);

        if (!callback) {typeSlowest.animate({width: endWidth}, 1500);} 
        else {
            typeSlowest.animate({width: endWidth}, 1500, function() {
                if (cbPageToOpen && cbPageToClose) {callback(cbPageToClose, cbPageToOpen);}
                else {callback();}
            });
        }
    }

    // Fades one page out, then the other in
    function swapPagesTransition(pageToClose, pageToOpen) {
        pages.not(pageToClose).hide();
        pageToClose.fadeOut(200, function() {
            pageToOpen.fadeIn(200);
            updateBottomPrompt();
        });
    }

    function updateBottomPrompt() {
        if (aboutMe.is(":visible")){
            scrollMore.not(scrollProjects).hide();
            scrollProjects.fadeOut("fast");
            scrollEducation.fadeIn("fast");
        } else if (education.is(":visible")) {
            scrollEducation.fadeOut("fast");
            scrollProjects.fadeIn("fast");
            scrollPastWorkPage.fadeOut("fast");
            contactMe.hide();
        } else if (projects.is(":visible")) {
            scrollEducation.hide();
            scrollProjects.fadeOut("fast");
            scrollPastWorkPage.fadeIn("fast");
            contactMe.fadeOut("fast");
        } else if (pastWork.is(":visible")) {
            scrollMore.not(scrollPastWorkPage).hide();
            scrollPastWorkPage.fadeOut("fast");
            contactMe.fadeIn("fast");
        }
    }

    // This scroll block needs to display the aboutMe page
    function firstScrollBlock() {
        if (newVal < oldVal && newVal != oldVal) {
            if (education.is(":visible")) {swapPagesTransition(education, aboutMe);}
            typeTransition(true);
        }
    }

    // This scroll block needs to display the educationPage
    function secondScrollBlock() {
        // Are we moving into this from previous or coming back from the next?
        if (newVal > oldVal && newVal != oldVal) {
            typeTransition(false, swapPagesTransition, aboutMe, education);//
        } else if (newVal != oldVal){
            swapPagesTransition(projects, education);
        }
    }

    // This scroll block needs to display the projectsPage
    function thirdScrollBlock() {
        if (newVal > oldVal && newVal != oldVal) {
            swapPagesTransition(education, projects);
        } else if (newVal != oldVal) {
            swapPagesTransition(pastWork, projects);
        }
    }    

    // This scroll block needs to display the pastWorkPage
    function fourthScrollBlock() {
        if (newVal != oldVal) {swapPagesTransition(projects, pastWork);}
    }

    function capScrolls() {
        if (aboutMe.is(":visible")){
            currentCap = 150;
            currentMin = 0;
        } else if (education.is(":visible")) {
            currentCap = 250;
            currentMin = 50;
        } else if (projects.is(":visible")) {
            currentCap = 350;
            currentMin = 150;
        } else if (pastWork.is(":visible")) {
            currentCap = 450;
            currentMin = 250;
        }
    }

    var newVal = 0
    var oldVal = 0;
    var currentCap = 150;
    var currentMin = 0;
    function scrollBehaviour(e) {
        // Find the new scroll value
        var movement = parseInt(e.deltaY);
        newVal = oldVal + movement;
        capScrolls();
        // Floor and roof for the scroll wheel values
        if (newVal < currentMin) {newVal=currentMin;}
        if (newVal > currentCap) {newVal=currentCap;}
        // Each section is a page, the scrollblock functions switch the active page
        if (newVal < 100) {
            firstScrollBlock();
        } else if (newVal < 200) {
            secondScrollBlock();
        } else if (newVal < 300) {
            thirdScrollBlock();
        } else if (newVal < 400) {
            fourthScrollBlock();
        }
        // Keep track of the last scroll to determine direction
        oldVal = newVal;
    }


    // Draw the first page
    function init(){
        aboutMe.show();
        // Write the line numbers into the HTML for the first page - eases editing
        for (i = 0; i < lineNumbers.length; i++) {
            if(i<10) {$(lineNumbers[i]).html("0" + i);}
            else {$(lineNumbers[i]).html(i);}
        }
        // Fade in the page and then callback to enable the scrolling
        typeTransition(true, function() {document.addEventListener("wheel", scrollBehaviour, true);});
        linksHidden.fadeIn("fast");
        scrollEducation.fadeIn("fast");
    }
    // Initialise
    init();
});
