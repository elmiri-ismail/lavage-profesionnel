$(function () {
   'use strict';
     
   var winH = $(window).height(),
       navH =$('.navbar').innerHeight();
    $('.slider ,.carousel-item').height(winH-( navH));
});