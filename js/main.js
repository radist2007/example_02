document.addEventListener('DOMContentLoaded', function(){

  var h_banner__h2 = document.getElementById("hero-banner__h2"),
      h_banner__logo = document.getElementById("hero-banner__logo"),
      h_banner__p  = document.getElementById("hero-banner__p"),
      h_banner__p_span  = document.querySelector(".hero-banner__p span"),
      s_banner__h2 = document.getElementById("sidebar-banner__h2"),
      s_banner__logo  = document.querySelector(".sidebar__banner img"),
      s_banner__why = document.getElementById("sidebarWHY"),
      s_banner__TlL = document.getElementById("TlL"),
      s_banner__TlM = document.getElementById("TlM"),
      s_banner__TL = document.getElementById("TL"),
      s_banner__TM = document.getElementById("TM");

  TweenLite.from(h_banner__h2, 2, {left:"-2342px"});
  TweenLite.from(h_banner__logo, 2, {top:"100%"});
  TweenLite.from(h_banner__p, 2, {top:"100%"});
  TweenLite.from(h_banner__p_span, 2, {opacity:"0", delay: 2});

  TweenLite.from(s_banner__h2, 2, {opacity:"0", delay: 2});
  TweenLite.from(s_banner__logo, 1, {height: "900px",right: "50px",bottom: "-650px", delay: 1})
  TweenLite.from(s_banner__why, 3, {bottom: "-1000px", delay:1})
  TweenLite.from(s_banner__TlL, 2, {left: "300px"})
  TweenLite.from(s_banner__TlM, 3, {left: "300px"})
  TweenLite.from(s_banner__TL, 4, {left: "300px"})
  TweenLite.from(s_banner__TM, 5, {left: "300px"})
});