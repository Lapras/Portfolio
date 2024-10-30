window.onscroll = function() {phadeHeader()}
//yeah so essentially whena  scroll happens, you detect if your near the top, and se the opacity of the whole header. It's pretty noice
function phadeHeader() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").style.opacity = "0";
    } else {
        document.getElementById("header").style.opacity = "1";
    }
}

//setup for the gallery
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
//adding/subtracting from slideIndex based off button clicks
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var y = document.getElementsByClassName("caption");
    // x is the lenght of the "slides" elements, so the code is adjustable to any amount of images/videos
    if(n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    //this essentially caps the value of n (slideindex) within the bounds of the amount of media
    //this can probably be done with a clamp, but I dont know how that works in JS rather than Java
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    //making everything that isn't the currently selected tag out of the area not display
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block";
    //displaying the currently selected div
}

function toggleFixed () {
    var parentwidth = $(".parent").width();
    $(".child").toggleClass("absolute").width(parentwidth);
}