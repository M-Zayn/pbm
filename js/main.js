$( document ).ready(function() {
  new WOW().init();

  $(window).load(function () {
    $(".loader-wrap").fadeOut(400,function () {
        $(this).remove();
        $(".loader-wrap").css({"display": "none"});
    });
    
});


$(window).on("scroll", function(){

  $('a[data-scroll]').on("click",function (e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 80;
    var target = ('#' + $(this).data('scroll'));
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset
    }, 1000);
  });

});



  $("#lang").on("click", function() {

    $(".lang").slideToggle();

  }); 


  // $("#toggle-menu-one").on("hover", function() {

  //   $(".slide-menu-one").slideToggle();
  //   $(".slide-menu-two").slideUp();
  //   $(".slide-menu-three").slideUp();

  // }); 
  // $("#toggle-menu-two").on("hover", function() {

  //   $(".slide-menu-one").slideUp();
  //   $(".slide-menu-two").slideToggle();
  //   $(".slide-menu-three").slideUp();

  // }); 
  // $("#toggle-menu-three").on("hover", function() {

  //   $(".slide-menu-one").slideUp();
  //   $(".slide-menu-three").slideToggle();
  //   $(".slide-menu-two").slideUp();

  // });


  $("#search").on("click", function() {

    $(".search-overlay").fadeIn(500);
    $("html, body").css({"overflow": "hidden"});

  });
  $(".search-overlay").on("click", function() {

    $(".search-overlay").fadeOut(500);
    $("html, body").css({"overflow": "auto"});

  }); 
  $(".search-overlay .overlay form").on("click", function(e) {

    e.stopPropagation();

  });


  $(".fa-bars").on("click", function () {

    $(".overlay").fadeIn();
    $(".overlay .fixed-menu").animate({"right":"0"});
    $("html, body").css({"overflow": "hidden"});

  });
  $(".fa-times").on("click", function () {

    $(".overlay").fadeOut();
    $(".overlay .fixed-menu").animate({"right":"-260px"});
    $("html, body").css({"overflow": "auto"});

  });
  $(".overlay").on("click", function () {

    $(".overlay").fadeOut();
    $(".overlay .fixed-menu").animate({"right":"-260px"});
    $("html, body").css({"overflow": "auto"});

  });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


});