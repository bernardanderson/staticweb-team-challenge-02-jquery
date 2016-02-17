$(document).ready(function() {
  $(document.body).add("<div id='1'></div>").add("<div id='2'></div>").add("<div id='3'></div>").prependTo(document.body);

  $("button").css( "display", "block");
  $("div").css( "display", "inline-block").css( "width", "200px").css( "height", "200px").css( "margin", "2px").css( "background-color", "lightgray");

  $("div").click(function() {
    $("div").css("border", "none");
    $(this).css( "border", "2px solid red");
  });

});


