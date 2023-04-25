$(document).ready(function () {
  $(".sub-menu").parent("li").addClass("has-child");
  $("#toggle").click(function () {
    $("nav").slideToggle();
  });
});
