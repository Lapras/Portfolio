window.onscroll = function() {phadeHeader()}

function phadeHeader() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").style.opacity = "0";
    } else {
        document.getElementById("header").style.opacity = "1";
    }
}