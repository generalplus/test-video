$(function() {
  $("#play").click(function() {
    $(".video").each(function(index) {
      this.play();
    });
  })
});
