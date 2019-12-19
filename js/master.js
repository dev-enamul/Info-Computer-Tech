
// =================================
// slider script
// ==================================

$(document).ready(function () {
$(".wideSlider").each(function () {
  var $this = $(this);
  var $slider = $this.find(".flexslider");
  var startat = $slider.attr("data-startat");
  if (startat = 0) {
  }
  $slider.flexslider({
    animation: 'slide',
    easing: 'linear',
    slideshow: true,
    slideshowSpeed: 7000,
    animationLoop: true,
    startAt: startat,
    controlNav: false,
    directionNav: true,
    nextText: " ",
    prevText: " ",
  });
});
})

// ======================================
// sub nav script
// ====================================

var i,mtab,mbtn;
mtab= document.querySelectorAll(".mtab");
mbtn= document.querySelectorAll("#mbtn");
function resetSubNavTab(){
  for(i=0;i<mtab.length;i++){
    mtab[i].style.display="none";
    mbtn[i].style.background="#2DC2EF";
  }
}

function oneSubNavTab(){
  resetSubNavTab();
  mtab[0].style.display="block";
  mbtn[0].style.background="#4269AF"
}
oneSubNavTab();

function viewSubNavTab(){
  for(let i=0;i<mbtn.length;i++){
    mbtn[i].addEventListener("click",function(){
      resetSubNavTab();
      mtab[i].style.display="block";
      mbtn[i].style.background="#4269AF";
    });
  }
}
viewSubNavTab();



// ========================================================
// Mobile Device nav
// =======================================================
var count =1;
function side_bar(){
  if(count==1){
    var side_nav=document.getElementById('mobile_menu');
    side_nav.style.left="0px";
    count=0;
  }else{
    var side_nav=document.getElementById('mobile_menu');
    side_nav.style.left="-200px";
    count=1;
  }
}
