$(document).ready(function() {
  
// Builds the three divs on the main page
  $(document.body).add("<div id='1'></div>").add("<div id='2'></div>").add("<div id='3'></div>").prependTo(document.body);

// Initial styling of the three divs on the main page
  $("div").css( "display", "inline-block").css( "width", "200px").css( "height", "200px").css( "margin", "2px").css( "background-color", "lightgray");

// This captures any clicks on any div and gives it a red border
  $("div").click(function() {

    // This check to see if a border has already been clicked, if so then
    //  then it removes/toggles off the border.  Otherwise, it clears all borders
    //  and then adds the border to the new div.
    if ($(this).css("border") === "2px solid rgb(255, 0, 0)") {
      $(this).css("border", "").removeClass("border");
    } else {
      $("div").css("border", "").removeClass("border");
      $(this).css("border", "2px solid rgb(255, 0, 0)").addClass("border");
    };

    if (!$("input").length) {
      $(document.body).append("<input id='text'></input>").append("<button id='button'>Change Color</button>");
      $("input").css("display", "block").attr("placeholder", "Enter a color");
    }
  });

  $("button").click(function() {
    var color = $("input").val();
    console.log("Color: ", color);
    $(".border").css("background-color", color);
  });


});


