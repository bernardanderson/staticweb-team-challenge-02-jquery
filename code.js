$(document).ready(function() {
  
// Builds the three divs on the main page
  $(document.body).add("<div></div>").add("<div></div>").add("<div></div>").prependTo(document.body);

// Beautification of the divs on the main page
  $("div").css("display", "inline-block").css("width", "200px").css("height", "200px").css("margin", "2px").css("background-color", "lightgray");

// This captures any clicks on any div and activates the coloring/styling of the divs, addition of the <input> &
//  <button> and the coloring of divs from the text input
  $("div").click(function() {

    // This checks to see if a border has already been clicked, if so it removes/toggles off the border.
    //  Otherwise, it clears all borders and then adds the border to the selected div.
    if ($(this).css("border") === "2px solid rgb(255, 0, 0)") {
      $(this).css("border", "").removeClass("border");
    } else {
      $("div").css("border", "").removeClass("border");
      $(this).css("border", "2px solid rgb(255, 0, 0)").addClass("border");
    };

    // This checks to see if there is an text <input> on the DOM, if not it adds both the <input> and
    //  the activation <button>
    if (!$("input").length) {
      $(document.body).append("<input></input>").append("<button>Change Color</button>");
      $("input").css("display", "block").attr("placeholder", "Enter a color");
    };
    
    // This checks to see if the button is clicked. If so, it changes the bgcolor of the clicked div
    //  to what is in text input. 
    $("button").click(function() {
      var color = $("input").val();
      $(".border").css("background-color", color);
    });
  });
});


