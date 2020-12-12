// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 5000,
    delay: (el, i) => 500 + 30 * i
  });


$(' .btn-dark ').on("click",function (){
    $(".body-swap").removeClass("body-light").addClass("body-dark");
    $(".nav-swap").removeClass("navbar-light").addClass("navbar-dark");
    $(".nav-swap").removeClass("bg-light").addClass("bg-dark");
    $(".body-1-container-swap").removeClass("body-1-container-light").addClass("body-1-container-dark");
    $(".body-row1-swap").removeClass("body-row1-light").addClass("body-row1-dark");
    $(".body-row2-swap").removeClass("body-row2-light").addClass("body-row2-dark");
    $(".monument-text-swap").removeClass("monument-text-light").addClass("monument-text-dark");
    $(".card-swap").removeClass("card-light").addClass("card-dark");
    $(".end-section-swap").removeClass("end-section-light").addClass("end-section-dark");
    $(".iconcontact-dark").removeClass("iconcontact-light").addClass("iconcontact-dark");

});


$(' .btn-light ').on("click",function (){
    $(".body-swap").removeClass("body-dark").addClass("body-light");
    $(".nav-swap").removeClass("navbar-dark").addClass("navbar-light");
    $(".nav-swap").removeClass("bg-dark").addClass("bg-light");
    $(".body-1-container-swap").removeClass("body-1-container-dark").addClass("body-1-container-light");
    $(".body-row1-swap").removeClass("body-row1-dark").addClass("body-row1-light");
    $(".body-row2-swap").removeClass("body-row2-dark").addClass("body-row2-light");
    $(".monument-text-swap").removeClass("monument-text-dark").addClass("monument-text-light");
    $(".card-swap").removeClass("card-dark").addClass("card-light");
    $(".end-section-swap").removeClass("end-section-dark").addClass("end-section-light");
    $(".iconcontact-dark").removeClass("iconcontact-dark").addClass("iconcontact-light");

});