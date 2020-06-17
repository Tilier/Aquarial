var speed = 500;

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, speed, function(){
   
        window.location.hash = hash;
      });
    }
  });
});
