$(document).ready(function(){

    const aboutMe = $("#aboutMe");
    const bookRecommendations = $("#bookRecommendations");
    const projects = $("#projects");
    const pastWork = $("#pastWork");
    const pages = $(".page");
    const pageOrder = new Map([
      [0, aboutMe],
      [1, bookRecommendations],
      [2, projects],
      [3, pastWork]
    ]);

    const scrollMore = $(".scrollMore");
    const scrollBookRecommendations = $("#scrollBookRecommendations");
    const scrollProjects = $("#scrollProjects");
    const scrollPastWorkPage = $("#scrollPastWorkPage ");
    const contactMe = $("#contactMe");
    const scrollInfoOrder = new Map([
      [0, scrollBookRecommendations],
      [1, scrollProjects],
      [2, scrollPastWorkPage],
      [3, contactMe]
    ]);
    var currentPage = 0;

    // Handler for aboutMe function slide down and slide up
    $(".aboutExpander").click(function() {expanderTransition($("#insideAbout"), $("#aboutHidden"));});
    // Handler for pageLinks function slide down and slide up
    $(".linksExpander").click(function() {expanderTransition($("#insideLinks"), $("#linksHidden"));});
    // Handler for bookRecommendations function slide down and slide up
    $(".bookExpander").click(function() {expanderTransition($("#insideBooks"), $("#bookHidden"));});

    // Expand a code block out or in
    function expanderTransition(inside, hidden){
        if (!inside.is(":visible")) {
            hidden.fadeOut("fast", function() {inside.slideDown("fast");});
        } else {
            inside.slideUp("fast", function() {hidden.fadeIn("fast")});
        }
    }

    $("#bookRecommendationsLink").click(async function() {
      await customScroll(0, 1);
    });

    $("#projectsLink").click(async function() {
      await customScroll(0, 2);
    });

    $("#pastWorkLink").click(async function() {
      await customScroll(0, 3);
    });

    $("#name").click(async function() {
      if (currentPage == 0) {
        return;
      }
      await customScroll(currentPage, 0);
    });

    // Perform the typing transition
    // false = type backwards
    // true = type forwards
    async function typeTransition(direction) {
      var expander = $(".expander");
      var type = $(".type");
      var typeSlow = $(".typeSlow");
      var typeSlowest = $(".typeSlowest");

      type.stop();
      typeSlow.stop();
      typeSlowest.stop();
      expander.stop();

      var endWidth = "0%";
      if (direction) {
        endWidth = "100%";
      }

      return await Promise.all([
        expander.animate({opacity: endWidth}, 200).promise(),
        type.animate({width: endWidth}, 350).promise(),
        typeSlow.animate({width: endWidth}, 500).promise(),
        typeSlowest.animate({width: endWidth}, 800).promise()
      ]);
    }

    // Fades one page out, then the other in
    async function swapPagesTransition(pageToClose, pageToOpen) {
      var pages = $(".page");
      pages.not(pageToClose).hide();
      await pageToClose.fadeOut(100, function () {pageToOpen.fadeIn(100);}).promise();
    }

    function updateBottomPrompt() {
      for (let [order, scrollInfo] of scrollInfoOrder) {
        if (order == currentPage) {
          scrollInfo.fadeIn("fast");
        } else if (order == currentPage - 1 || order == currentPage + 1) {
          scrollInfo.fadeOut("fast")
        } else {
          scrollInfo.hide();
        }
      }
    }

    var scrollInProgress = false;
    async function scrollBehaviour(e) {
        if (scrollInProgress) {
          return;
        }
        scrollInProgress = true;
        var movement = parseInt(e.deltaY);
        if (movement > 0 ) {
          await scrollForwards();
        } else {
          await scrollBackwards();
        }
        scrollInProgress = false;
    }

    async function scrollForwards() {
      if (currentPage == pageOrder.size - 1) {
        return;
      }
      await typeTransition(false);
      await swapPagesTransition(pageOrder.get(currentPage), pageOrder.get(currentPage + 1));
      currentPage += 1;
      await updateBottomPrompt();
      await typeTransition(true);
    }

    async function scrollBackwards() {
      if (currentPage == 0) {
        return;
      }
      await typeTransition(false);
      await swapPagesTransition(pageOrder.get(currentPage), pageOrder.get(currentPage - 1));
      currentPage -= 1;
      await updateBottomPrompt();
      await typeTransition(true);
    }

    async function customScroll(pageToClose, pageToOpen) {
      await typeTransition(false);
      await swapPagesTransition(pageOrder.get(pageToClose), pageOrder.get(pageToOpen));
      currentPage = pageToOpen;
      await updateBottomPrompt();
      await typeTransition(true);
    }


    function init(){
      pageOrder.get(0).show();
      var lineNumbers = $(".lineNumber");

      for (i = 0; i < lineNumbers.length; i++) {
          if(i<10) {$(lineNumbers[i]).html("0" + i);}
          else {$(lineNumbers[i]).html(i);}
      }

      typeTransition(true);
      document.addEventListener("wheel", scrollBehaviour, true);

      $("#linksHidden").fadeIn("fast");
      scrollInfoOrder.get(0).fadeIn("fast");
    }

    init();
});
