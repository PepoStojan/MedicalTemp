$(function () {


    $(document).ready(function(){
        $(window).scroll(function() {
          if ($(document).scrollTop() > 80) { 
            $(".navbar-IndexHtml").css("background-color", "rgba(19, 96, 99, 0.356)" );
           
          } else {
            $(".navbar-IndexHtml").css("background-color", "transparent");
          }
        });
      });
})