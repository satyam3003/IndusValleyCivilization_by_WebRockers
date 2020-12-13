$(' .btn-dark ').on("click", function () {
    $(".body-swap").removeClass("body-light").addClass("body-dark");
    $(".nav-swap").removeClass("navbar-light").addClass("navbar-dark");
    $(".nav-swap").removeClass("bg-light").addClass("bg-dark");
    $(".top-img-1-swap").removeClass("top-img-1-light").addClass("top-img-1-dark");
    $(".main-body-lg-div-swap").removeClass("main-body-lg-div-light").addClass("main-body-lg-div-dark");
    $(".end-section-swap").removeClass("end-section-light").addClass("end-section-dark");
    $(".iconcontact-swap").removeClass("iconcontact-light").addClass("iconcontact-dark");
    $(".comment-display-body-swap").removeClass("comment-display-body-light").addClass("comment-display-body-dark");
    $(".para-rest-swap").removeClass("para-rest-light").addClass("para-rest-dark");
    $(".para-text-rest-swap").removeClass("para-text-rest-light").addClass("para-text-rest-dark");
    $(".main-card-swap").removeClass("main-card-light").addClass("main-card-dark");
});


$(' .btn-light ').on("click", function () {
    $(".body-swap").removeClass("body-dark").addClass("body-light");
    $(".nav-swap").removeClass("navbar-dark").addClass("navbar-light");
    $(".nav-swap").removeClass("bg-dark").addClass("bg-light");
    $(".top-img-1-swap").removeClass("top-img-1-dark").addClass("top-img-1-light");
    $(".main-body-lg-div-swap").removeClass("main-body-lg-div-dark").addClass("main-body-lg-div-light");
    $(".end-section-swap").removeClass("end-section-dark").addClass("end-section-light");
    $(".iconcontact-swap").removeClass("iconcontact-dark").addClass("iconcontact-light");
    $(".comment-display-body-swap").removeClass("comment-display-body-dark").addClass("comment-display-body-light");
    $(".para-rest-swap").removeClass("para-rest-dark").addClass("para-rest-light");
    $(".para-text-rest-swap").removeClass("para-text-rest-dark").addClass("para-text-rest-light");
    $(".main-card-swap").removeClass("main-card-dark").addClass("main-card-light");
});
