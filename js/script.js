
$(document).ready(function(){

    // Cache all the selectors - save time and bugs
    var lineNumbers = $(".lineNumber");
    var aboutExpander = $(".aboutExpander");
    var insideAbout = $("#insideAbout");
    var aboutHidden = $("#aboutHidden");
    var linksExpander = $(".linksExpander");
    var insideLinks = $("#insideLinks");
    var linksHidden = $("#linksHidden");
    var bookExpander = $(".bookExpander");
    var insideBooks = $("#insideBooks");
    var bookHidden = $("#bookHidden");
    var type = $(".type");
    var typeSlow = $(".typeSlow");
    var typeSlowest = $(".typeSlowest");
    var expander = $(".expander");
    var aboutMe = $("#aboutMe");
    var bookRecommendations = $("#bookRecommendations");
    var projects = $("#projects");
    var pastWork = $("#pastWork");
    var pages = $(".page");
    var scrollMore = $(".scrollMore");
    var scrollBookRecommendations = $("#scrollBookRecommendations");
    var scrollProjects = $("#scrollProjects");
    var scrollPastWorkPage = $("#scrollPastWorkPage ");
    var contactMe = $("#contactMe");

    // Handler for aboutMe function slide down and slide up
    aboutExpander.click(function() {expanderTransition(insideAbout, aboutHidden);});
    // Handler for pageLinks function slide down and slide up
    linksExpander.click(function() {expanderTransition(insideLinks, linksHidden);});
    // Handler for bookRecommendations function slide down and slide up
    bookExpander.click(function() {expanderTransition(insideBooks, bookHidden);});

    // Expand a code block out or in
    function expanderTransition(inside, hidden){
        if (!inside.is(":visible")) {
            hidden.fadeOut("fast", function() {inside.slideDown("fast");});
        } else {
            inside.slideUp("fast", function() {hidden.fadeIn("fast")});
        }
    }

    // Perform the typing transition
    // false = type backwards
    // true = type forwards
    async function typeTransition(direction) {
        type.stop();typeSlow.stop();typeSlowest.stop();expander.stop();
        var endWidth;
        if (direction) {
          endWidth = "100%";
        }
        else {
          endWidth = "0%";
        }
        return await Promise.all([expander.animate({opacity: endWidth}, 200).promise(),
         type.animate({width: endWidth}, 750).promise(),
         typeSlow.animate({width: endWidth}, 1000).promise(),
         typeSlowest.animate({width: endWidth}, 1500).promise()]);
    }

    // Fades one page out, then the other in
    async function swapPagesTransition(pageToClose, pageToOpen) {
        pages.not(pageToClose).hide();
        await pageToClose.fadeOut(200, function () {pageToOpen.fadeIn(200); updateBottomPrompt();});
    }

    function updateBottomPrompt() {
        if (aboutMe.is(":visible")){
            scrollMore.not(scrollProjects).hide();
            scrollProjects.fadeOut("fast");
            scrollBookRecommendations.fadeIn("fast");
        } else if (bookRecommendations.is(":visible")) {
            scrollBookRecommendations.fadeOut("fast");
            scrollProjects.fadeIn("fast");
            scrollPastWorkPage.fadeOut("fast");
            contactMe.hide();
        } else if (projects.is(":visible")) {
            scrollBookRecommendations.hide();
            scrollProjects.fadeOut("fast");
            scrollPastWorkPage.fadeIn("fast");
            contactMe.fadeOut("fast");
        } else if (pastWork.is(":visible")) {
            scrollMore.not(scrollPastWorkPage).hide();
            scrollPastWorkPage.fadeOut("fast");
            contactMe.fadeIn("fast");
        }
    }

    var currentPage = 0;
    var timeLastEvaluated = Date.now();
    function scrollBehaviour(e) {
        if (Date.now() - timeLastEvaluated < 2000) {
          return;
        }
        var movement = parseInt(e.deltaY);
        if (movement > 0 ) {
          scrollForwards();
        } else {
          scrollBackwards();
        }
        timeLastEvaluated = Date.now();
    }

    async function scrollForwards() {
      switch (currentPage) {
        case 0:
          await typeTransition(false);
          await swapPagesTransition(aboutMe, bookRecommendations);
          await typeTransition(true);
          currentPage = 1;
          break;
        case 1:
          await typeTransition(false);
          await swapPagesTransition(bookRecommendations, projects);
          await typeTransition(true);
          currentPage = 2;
          break;
        case 2:
          await typeTransition(false);
          await swapPagesTransition(projects, pastWork);
          await typeTransition(true);
          currentPage = 3;
          break;
        case 3:
          break;
      }
    }

    async function scrollBackwards() {
      switch (currentPage) {
        case 0:
          break;
        case 1:
          await typeTransition(false);
          await swapPagesTransition(bookRecommendations, aboutMe);
          await typeTransition(true);
          currentPage = 0;
          break;
        case 2:
          await typeTransition(false);
          await swapPagesTransition(projects, bookRecommendations);
          await typeTransition(true);
          currentPage = 1;
          break;
        case 3:
          await typeTransition(false);
          await swapPagesTransition(pastWork, projects);
          await typeTransition(true);
          currentPage = 2;
          break;
        }
    }

    // Draw the first page
    function init(){
        aboutMe.show();
        // Write the line numbers into the HTML
        for (i = 0; i < lineNumbers.length; i++) {
            if(i<10) {$(lineNumbers[i]).html("0" + i);}
            else {$(lineNumbers[i]).html(i);}
        }
        // Fade in the page and then callback to enable the scrolling
        typeTransition(true, function() {});
        document.addEventListener("wheel", scrollBehaviour, true);
        linksHidden.fadeIn("fast");
        scrollBookRecommendations.fadeIn("fast");
    }
    // Initialise
    init();
});
