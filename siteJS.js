window.onscroll = function() {phadeHeader()}

function phadeHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.opacity = "0";
    } else {
        document.getElementById("header").style.opacity = "1";
    }
}