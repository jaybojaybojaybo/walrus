$(function () {
  $(".click-text").click(function() {
    $("div#visible-text").toggle();
    $("div#invisible-text").toggle();
  });

  $("#fade-in").click(function() {
    $(".fade-in-text").fadeIn();
  });
});
