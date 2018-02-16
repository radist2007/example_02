document.addEventListener('DOMContentLoaded', function(){

  var h_banner__h2 = document.getElementById("hero-banner__h2");
  var h_banner__logo = document.getElementById("hero-banner__logo");
  var h_banner__p  = document.getElementById("hero-banner__p");
  var h_banner__p_span  = document.querySelector(".hero-banner__p span");

  TweenLite.from(h_banner__h2, 2, {left:"-2342px"});

  TweenLite.from(h_banner__logo, 2, {top:"100%"});
  TweenLite.from(h_banner__p, 2, {top:"100%"});
  TweenLite.from(h_banner__p_span, 2, {opacity:"0", delay: 2});
});